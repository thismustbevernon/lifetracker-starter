import * as React from "react";
import "./NutritionDetail.css";
import NutritionCard from "../NutritionCard/NutritionCard";
import { useParams } from "react-router-dom";

export default function NutritionDetail(props) {
  const { nutritionId } = useParams();
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
    <div className="nutrition-detail">
      {props.nutrition.map((element, idx) => {
        if (element.id == nutritionId) {
          // return <NutritionCard></NutritionCard>
          return (
            <NutritionCard
              key={idx}
              quantity={element.quantity}
              imageUrl={element.image_url}
              name={element.name}
              calories={element.calories}
              category={element.category}
              createdAt={element.created_at}
              id={element.id}
            ></NutritionCard>
          );
        }
      })}
    </div>
  );
}
