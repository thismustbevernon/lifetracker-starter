import * as React from "react";
import SleepForm from "../SleepForm/SleepForm";
import "./SleepNew.css";

export default function SleepNew(props) {
  console.log("propsSN", props);
  return (
    <div className="sleep-new">
      <SleepForm addSleep={props.addSleep}></SleepForm>
    </div>
  );
}
