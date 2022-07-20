import * as React from "react";
import ExerciseFeed from "../ExerciseFeed/ExerciseFeed";
import "./ExerciseOverview.css";
import { Link } from "react-router-dom";

export default function ExerciseOverview(props) {
  return (
    <div className="content">
      <div className="exercise-overview">
        <div className="header">
          <h3>Overview</h3>
          <Link className="add-e" to="/exercise/create">
            Add Exercise
          </Link>
        </div>
        <ExerciseFeed
          exercise={props.exercise}
          user={props.user}
        ></ExerciseFeed>
      </div>
    </div>
  );
}
