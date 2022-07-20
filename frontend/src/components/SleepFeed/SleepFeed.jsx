import * as React from "react";
import SleepCard from "../SleepCard/SleepCard";
import "./SleepFeed.css";
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";

export default function SleepFeed(props) {
  const overview = [
    { day: "Jul 1st, 2022", start: "4:00pm", end: "1:00am", slept: "9 hours" },
    { day: "Jul 2nd, 2022", start: "9:00pm", end: "6:00am", slept: "9 hours" },
    { day: "Jul 3rd, 2022", start: "11:00pm", end: "7:00am", slept: "8 hours" },
    { day: "Jul 4th, 2022", start: "11:00pm", end: "5:00am", slept: "6 hours" },
  ];
  const [isFetching, setIsFetching] = useState(false);
  const [sleep, setSleep] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchSleeps = async () => {
      if (!(Object.keys(props.user).length === 0)) {
        setIsFetching(true);

        const { data, error } = await apiClient.listSleeps(props.user.id);
        if (error) {
          setError(error);
        }
        if (data) {
          setSleep(data.sleepss);
        }
        setIsFetching(false);
      }
    };

    fetchSleeps();
  }, []);
  return (
    <div className="sleep-feed">
      {sleep.length === 0 ? (
        <div className="empty">
          <h2>Nothing here yet.</h2>
        </div>
      ) : (
        sleep.map((element, idx) => {
          const date = new Date(element.start_time);
          const dates = new Date(element.end_time);
          const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          var difference = (dates.getTime() - date.getTime()) / 1000;
          difference /= 60 * 60;
          return (
            <SleepCard
              key={idx}
              day={longEnUSFormatter.format(date)}
              start={date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
              end={dates.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
              slept={Math.abs(Math.round(difference))}
            ></SleepCard>
          );
        })
      )}
    </div>
  );
}
