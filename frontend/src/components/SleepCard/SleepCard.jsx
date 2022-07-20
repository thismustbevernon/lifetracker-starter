import * as React from "react";
import "./SleepCard.css";

export default function SleepCard(props) {
  return (
    <div className="sleep-card">
      <div className="card-header">
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
          alt="rest"
        />
        <h2 className="titles">{props.day}</h2>
      </div>
      <div className="card-stats">
        <div className="cardStat">
          <p>Start Time</p>
          <span>{props.start}</span>
        </div>
        <div className="cardStat">
          <p>End Time</p>
          <span>{props.end}</span>
        </div>
      </div>
      <div className="card-meta">
        <small>{props.slept} Hours</small>
      </div>
    </div>
  );
}
