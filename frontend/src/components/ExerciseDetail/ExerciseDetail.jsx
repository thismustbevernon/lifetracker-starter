import * as React from "react";
import "./ExerciseDetail.css";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import { useParams } from "react-router-dom";

export default function ExerciseDetail(props) {
  const { exerciseId } = useParams();
  const overview = [
    {
      id: 1,
      name: "apple",
      url: "",
      calories: 500,
      quantity: 2,
      date: "01/11/2000",
      category: "fruit",
    },
    {
      id: 2,
      name: "milk",
      url: "",
      calories: 100,
      quantity: 3,
      date: "12/11/2055",
      category: "dairy",
    },
    {
      id: 3,
      name: "carrot",
      url: "",
      calories: 220,
      quantity: 1,
      date: "01/16/2023",
      category: "vegetables",
    },
    {
      id: 4,
      name: "bread",
      url: "",
      calories: 660,
      quantity: 1,
      date: "01/16/2023",
      category: "carbs",
    },
  ];
  return (
    <div className="exercise-detail">
      {props.exercise.map((element, idx) => {
        if (element.id == exerciseId) {
          const date = new Date(element.created_at);
          const enUSFormatter = new Intl.DateTimeFormat("en-US");
          return (
            <ExerciseCard
              key={idx}
              name={element.name}
              duration={element.duration}
              intensity={element.intensity}
              category={element.category}
              created_at={enUSFormatter.format(date)}
            ></ExerciseCard>
          );
        }
      })}
    </div>
  );
}
