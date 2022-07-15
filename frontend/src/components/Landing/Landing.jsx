import * as React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <img
          className="hero-img"
          src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
          alt="hero-img"
        />
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>
      <div className="icons">
        <div className="icon">
          <img
            className="img"
            src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg"
            alt="Fitness"
          />
          <p className="label">Fitness</p>
        </div>
        <div className="icon">
          <img
            className="img"
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg"
            alt="Food"
          />
          <p className="label">Food</p>
        </div>
        <div className="icon">
          <img
            className="img"
            src="	http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
            alt="Rest"
          />
          <p className="label">Rest</p>
        </div>
        <div className="icon">
          <img
            className="img"
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg"
            alt="Planner"
          />
          <p className="label">Planner</p>
        </div>
      </div>
    </div>
  );
}