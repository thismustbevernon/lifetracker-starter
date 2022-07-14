// import * as React from "react";

// export default function Nutrition() {
//   return <div>THIS IS THE NUTRITION PAGE</div>;
// }



import { Routes, Route } from "react-router-dom"
// import { Banner, NutritionNew, NutritionOverview, NotFound } from "components"
//import "./NutritionPage.css"

export default function Nutrition() {
  return (
    <div className="NutritionPage">
      <Banner title="Nutrition" />

      <div className="content">
        <Routes>
          <Route path="/" element={<NutritionOverview />} />
          <Route path="/create" element={<NutritionNew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
