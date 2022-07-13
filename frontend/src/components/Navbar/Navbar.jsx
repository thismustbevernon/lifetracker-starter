import * as React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Activity", path: `/activity` },
  { label: "Exercise", path: `/exercise` },
  { label: "Nutrition", path: `/nutrition` },
  { label: "Sleep", path: `/sleep` },
];

export default function Navbar() {
  return (
    <div className="links">
      <Link to="/login">LOGIN</Link>
      <Link to="/register">REGISTER</Link>
    </div>
  );
}
