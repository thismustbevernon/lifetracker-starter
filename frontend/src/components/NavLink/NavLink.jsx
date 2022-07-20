import * as React from "react";
import "./NavLink.css";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";

export default function NavLink(props) {
  return (
    <ul className="nav-links">
      <li>
        {/* <a href="">Activity</a> */}
        <Link to="/activity">Activity</Link>
      </li>
      <li>
        {/* <a href="">Exercise</a> */}
        <Link to="/exercise">Exercise</Link>
      </li>
      <li>
        {/* <a href="">Nutrition</a> */}
        <Link to="/nutrition">Nutrition</Link>
      </li>
      <li>
        {/* <a href="">Sleep</a> */}
        <Link to="/sleep">Sleep</Link>
      </li>
      {props.user.email ? (
        <li className="btn">
          <span onClick={props.handleLogout}>Logout</span>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="btn">
            <Link to="/register">Sign Up</Link>
          </li>
        </>
      )}
    </ul>
  );
}
