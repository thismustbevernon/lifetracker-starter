import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/reister";
import ActivityPage from "./components/ActivityPage/ActivityPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
