import * as React from "react";
import "./ExerciseCard.css";

export default function ExerciseCard(props) {
  return (
    <div className="exercise-card">
      <div className="card-header">
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg"
          alt="exercise"
        />
        <h2 className="titles">{props.name}</h2>
      </div>
      <div className="card-stats">
        <div className="cardStat">
          <p>Duration</p>
          <span>{props.duration}</span>
        </div>
        <div className="cardStat">
          <p>Intensity</p>
          <span>{props.intensity}</span>
        </div>
      </div>
      <div className="card-meta">
        <small>{props.created_at}</small>
        <small className="categoryy">{props.category}</small>
      </div>
    </div>
  );
}