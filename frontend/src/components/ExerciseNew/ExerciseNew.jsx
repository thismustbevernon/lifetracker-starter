import * as React from "react";
import "./ExerciseNew.css";
import ExerciseForm from "../ExerciseForm/ExerciseForm";

export default function ExerciseNew(props) {
  return (
    <div className="exercise-new">
      <ExerciseForm addExercise={props.addExercise}></ExerciseForm>
    </div>
  );
}
