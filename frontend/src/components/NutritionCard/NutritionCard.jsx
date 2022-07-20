import * as React from "react";
import "./NutritionCard.css";

export default function NutritionCard(props) {
  return (
    <div className="nutrition-card">
      <div className="card-header">
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg"
          alt="nutrition"
        />
        <h2 className="titles">{props.name}</h2>
      </div>
      <div className="card-stats">
        <div className="cardStat">
          <p>Calories</p>
          <span>{props.calories}</span>
        </div>
        <div className="cardStat">
          <p>Quantity</p>
          <span>{props.quantity}</span>
        </div>
      </div>
      <div className="card-meta">
        <small>{props.createdAt}</small>
        <small className="categoryy">{props.category}</small>
      </div>
    </div>
  );
}
