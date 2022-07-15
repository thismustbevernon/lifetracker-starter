
import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationFrom from "./components/RegistrationForm/RegistrationForm";
import NutritionPage from "./components/NutritionPage/NutritionPage";
import ExercisePage from "./components/ExercisePage/ExercisePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import ActivityPage from "./components/ActivityPage/ActivityPage";
import SleepPage from "./components/SleepPage/SleepPage";
import axios from "axios";
// import { AuthContextProvider, useAuthContext } from "../../contexts/auth";

import { AuthContextProvider, useAuthContext } from "./contexts/auth";
import apiClient from "./services/apiClient";

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = useAuthContext();
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingExercise, setIsFetchingExercise] = useState(false);
  const [isFetchingSleep, setIsFetchingSleep] = useState(false);
  const [isFetchingActivity, setIsFetchingActivity] = useState(false);
  const [activity, setActivity] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setUser(data.user);
      }
      if (error) {
        setError(error);
      }
    };

    const token = localStorage.getItem("lifetracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, [setUser]);

  const addNutrition = (newNutrition) => {
    setNutrition((oldNutrition) => [newNutrition, ...oldNutrition]);
  };

  const addExercise = (newExercise) => {
    setExercise((oldExercise) => [newExercise, ...oldExercise]);
  };

  const addSleep = (newSleep) => {
    setSleep((oldSleep) => [newSleep, ...oldSleep]);
  };

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setError(null);
  };
  const handleNutritonForm = async () => {
    const fetchActivites = async () => {
      setIsFetchingActivity(true);

      const { data, error } = await apiClient.listActivities();
      if (data) {
        setActivity(data.activities);
      }
      if (error) {
        setError(error);
      }
      setIsFetchingActivity(false);
    };

    fetchActivites();
  };
  return (
    <div className="app">
      <React.Fragment>
        {
          <BrowserRouter>
            <Navbar
              handleLogout={handleLogout}
              isLogin={isLogin}
              user={user}
              setUser={setUser}
            />
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route
                path="/login"
                element={
                  <LoginPage
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}
                  ></LoginPage>
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <RegistrationPage
                    user={user}
                    setUser={setUser}
                    isLogin={isLogin}
                  ></RegistrationPage>
                }
              ></Route>
              <Route
                path="/activity"
                element={
                  <ActivityPage
                    activity={activity}
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}
                  ></ActivityPage>
                }
              ></Route>
              <Route
                path="/nutrition/*"
                element={
                  <NutritionPage
                    handleNutritonForm={handleNutritonForm}
                    addNutrition={addNutrition}
                    nutrition={nutrition}
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}
                  ></NutritionPage>
                }
              ></Route>
              <Route
                path="/exercise/*"
                element={
                  <ExercisePage
                    exercise={exercise}
                    addExercise={addExercise}
                    user={user}
                    setUser={setUser}
                  ></ExercisePage>
                }
              ></Route>
              <Route
                path="/sleep/*"
                element={
                  <SleepPage
                    addSleep={addSleep}
                    sleep={sleep}
                    user={user}
                    setUser={setUser}
                  ></SleepPage>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        }
      </React.Fragment>
    </div>
  );
}














// OLD 
// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import * as React from "react";
// import Navbar from "./components/VNavbar/Navbar";
// import Landing from "./components/VLanding/Landing";
// import Login from "./components/VLogin/Login";
// import Register from "./components/VRegister/Register";

// //import Nutrition from "./components/Nutrition/Nutrition";
// import Activity from "./components/VActivity/Activity";

// import NutritionOverview from "./components/VNutrition/NutritionOverview";
// import NutritionNew from "./components/VNutrition/NutritionNew";

// import { BrowserRouter, Routes, Route} from "react-router-dom";

// // import Container from "@mui/material/Container";

// function App() {
//   const [appState, setAppState] = useState({});
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/login" element={<Login setAppState={setAppState} />} />
//           <Route
//             path="/register"
//             element={<Register setAppState={setAppState} />}
//           />

//           <Route path="/nutrition" element={<NutritionOverview />} />
//           <Route path="/nutrition/create" element={<NutritionNew />} />

//           {/* <Route path="/nutrition" element={<Nutrition />} />

//           <Route path="/activity" element={<Activity />} /> */}
//           {/* <Route
//             path="/activity"
//             element={<ProtectedRoute element={<ActivityPage />} />}
//           /> */}
//           {/* <Route
//             path="/exercise/*"
//             element={<ProtectedRoute element={<ExercisePage />} />}
//           />
//           <Route
//             path="/nutrition/*"
//             element={<ProtectedRoute element={<NutritionPage />} />}
//           />
//           <Route
//             path="/sleep/*"
//             element={<ProtectedRoute element={<SleepPage />} />}
//           />
//           <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
