import * as React from "react";
import "./SleepDetail.css";
import SleepCard from "../SleepCard/SleepCard";
import { useParams } from "react-router-dom";

export default function SleepDetail(props) {
  const { sleepId } = useParams();
  const overview = [
    {
      id: 1,
      day: "Jul 1st, 2022",
      start: "4:00pm",
      end: "1:00am",
      slept: "9 hours",
    },
    {
      id: 2,
      day: "Jul 2nd, 2022",
      start: "9:00pm",
      end: "6:00am",
      slept: "9 hours",
    },
    {
      id: 3,
      day: "Jul 3rd, 2022",
      start: "11:00pm",
      end: "7:00am",
      slept: "8 hours",
    },
    {
      id: 4,
      day: "Jul 4th, 2022",
      start: "11:00pm",
      end: "5:00am",
      slept: "6 hours",
    },
  ];
  return (
    <div className="sleep-detail">
      {props.sleep.map((element, idx) => {
        if (element.id == sleepId) {
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
        }
      })}
    </div>
  );
}

// console.log("element", element)
// const date = new Date(element.start_time)
// const dates = new Date(element.end_time)
// console.log("date", date)
// const longEnUSFormatter = new Intl.DateTimeFormat('en-US',{
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// })
// var difference = (dates.getTime() - date.getTime()) / 1000
// difference /= (60*60)
// return <SleepCard key={idx} day={longEnUSFormatter.format(date)} start={date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})} end={dates.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})} slept={Math.abs(Math.round(difference))}></SleepCard>
