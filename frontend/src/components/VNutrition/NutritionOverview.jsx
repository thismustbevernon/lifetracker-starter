// import * as React from "react";

// export default function NutritionOverview() {
//   return <div>THIS IS THE NUTRITION OVERVIEW PAGE</div>;
// }



import { useNavigate } from "react-router-dom"
//import { Button, NutritionCard } from "components"
//import { useNutritionContext } from "contexts/nutrition"

//import "./NutritionOverview.css"

export default function NutritionOverview() {
  const navigate = useNavigate()
//   const { nutritions } = useNutritionContext()

  return (
    <div className="NutritionOverview">
      <div className="header">
        <h3>Overview</h3>
        <button className="outline aqua" onClick={() => navigate("/nutrition/create")} size="small">
          {"Record Nutrition"}
        </button>
      </div>
      <div className="feed">
        {/* {nutritions?.length ? (
          nutritions.map((nutrition) => <NutritionCard nutrition={nutrition} key={nutrition.id} />)
        ) : (
          <div className="empty">
            <h2>Nothing here yet.</h2>
          </div>
        )} */}
      </div>
    </div>
  )
}
