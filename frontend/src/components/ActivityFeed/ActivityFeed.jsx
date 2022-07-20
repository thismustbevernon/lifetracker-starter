import * as React from "react";
import "./ActivityFeed.css";
import { useState, useEffect } from "react";
import SummaryStat from "../SummaryStat/SummaryStat";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";

export default function ActivityFeed(props) {
  // const avgCaloriesPerCategory = [
  //   { category: "candy", avgCaloriesPerCategory: 100.0 },
  //   { category: "drink", avgCaloriesPerCategory: 300.0 },
  //   { category: "fruit", avgCaloriesPerCategory: 266.6 },
  //   { category: "dairy", avgCaloriesPerCategory: 400.0 },
  //   { category: "carbs", avgCaloriesPerCategory: 500.0 },
  //   { category: "vegetables", avgCaloriesPerCategory: 330.0 },
  //   { category: "protein", avgCaloriesPerCategory: 550.0 },
  // ];
  // const totalCaloriesPerDay = [
  //   { date: "12-22-2022", totalCaloriesPerDay: 300 },
  //   { date: "12-23-2022", totalCaloriesPerDay: 1000 },
  //   { date: "12-24-2022", totalCaloriesPerDay: 800 },
  // ];
  const [isFetching, setIsFetching] = useState(false);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchActivities = async () => {
      if (!(Object.keys(props.user).length === 0)) {
        setIsFetching(true);

        const { data, error } = await apiClient.listActivities(props.user.id);
        if (error) {
          setError(error);
        }
        if (data) {
          setActivity(data.activities);
        }
        setIsFetching(false);
      }
    };

    fetchActivities();
  }, []);
  return (
    <div className="activity-feed">
      <div className="actions">
        <h2>Activity Feed</h2>
        <div className="btnd">
          <Link className="button-e" to="/exercise/create">
            Record Exercise
          </Link>
          <Link className="button-n" to="/nutrition/create">
            Record Nutrition
          </Link>
          <Link className="button-s" to="/sleep/create">
            Record Sleep
          </Link>
        </div>
      </div>
      <div className="stats">
        <h4>Average Calories Per Category</h4>
        {activity.length === 0 ? (
          <div className="empty">
            <h2 className="here">Nothing here yet.</h2>
          </div>
        ) : (
          <div className="per-category">
            {activity.length > 6
              ? activity.slice(0, 6).map((element, idx) => {
                  return (
                    <SummaryStat
                      type={"card-cat"}
                      stat={element.sum / element.count}
                      label={"calories"}
                      substat={element.category}
                      key={idx}
                    ></SummaryStat>
                  );
                })
              : activity.map((element, idx) => {
                  return (
                    <SummaryStat
                      type={"card-cat"}
                      stat={element.sum / element.count}
                      label={"calories"}
                      substat={element.category}
                      key={idx}
                    ></SummaryStat>
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
}
