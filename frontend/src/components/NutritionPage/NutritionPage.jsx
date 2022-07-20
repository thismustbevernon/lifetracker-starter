import * as React from "react";
import "./NutritionPage.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NutritionOverview from "../NutritionOverview/NutritionOverview";
import NutritionNew from "../NutritionNew/NutritionNew";
import NutritionDetail from "../NutritionDetail/NutritionDetail";
import LoginForm from "../LoginForm/LoginForm";
import apiClient from "../../services/apiClient";

export default function NutritionPage(props) {
  return (
    <div className="nutrition-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Nutrition</h1>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <NutritionOverview
                  nutrition={props.nutrition}
                  user={props.user}
                ></NutritionOverview>
              }
            ></Route>
            <Route
              path="/create"
              element={
                <NutritionNew
                  handleNutritonForm={props.handleNutritonForm}
                  addNutrition={props.addNutrition}
                ></NutritionNew>
              }
            ></Route>
            <Route
              path="/id/:nutritionId"
              element={
                <NutritionDetail nutrition={props.nutrition}></NutritionDetail>
              }
            ></Route>
          </Routes>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
}
