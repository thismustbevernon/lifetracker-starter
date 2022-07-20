import * as React from "react"
import "./NutritionNew.css"
import NutritionForm from "../NutritionForm/NutritionForm"

export default function NutritionNew(props){
    return (
        <div className="nutrition-new">
            {/* <h2>Record Nutrition</h2> */}
            <NutritionForm handleNutritonForm={props.handleNutritonForm} addNutrition={props.addNutrition}></NutritionForm>
        </div>
    )
}