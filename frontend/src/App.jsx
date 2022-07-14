import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import Nutrition from "./components/Nutrition/Nutrition";
import Activity from "./components/Activity/Activity";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Container from "@mui/material/Container";


function App() {
  const [appState, setAppState] = useState({})
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login setAppState={setAppState} />}/>
          <Route path="/register"  element={<Register setAppState={setAppState} />}/>
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/activity" element={<Activity />} />
          {/* <Route
            path="/activity"
            element={<ProtectedRoute element={<ActivityPage />} />}
          /> */}
          {/* <Route
            path="/exercise/*"
            element={<ProtectedRoute element={<ExercisePage />} />}
          />
          <Route
            path="/nutrition/*"
            element={<ProtectedRoute element={<NutritionPage />} />}
          />
          <Route
            path="/sleep/*"
            element={<ProtectedRoute element={<SleepPage />} />}
          />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
