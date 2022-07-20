import * as React from "react";
import "./SleepOverview.css";
import SleepFeed from "../SleepFeed/SleepFeed";
import { Link } from "react-router-dom";

export default function SleepOverview(props) {
  return (
    <div className="content">
      <div className="sleep-overview">
        <div className="header">
          <h3>Overview</h3>
          <Link className="add" to="/sleep/create">
            Add Sleep
          </Link>
        </div>
        <SleepFeed sleep={props.sleep} user={props.user}></SleepFeed>
      </div>
    </div>
  );
}
