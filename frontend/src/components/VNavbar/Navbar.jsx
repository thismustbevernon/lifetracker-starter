// import * as React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// // const navLinks = [
// //   { label: "Activity", path: `/activity` },
// //   { label: "Exercise", path: `/exercise` },
// //   { label: "Nutrition", path: `/nutrition` },
// //   { label: "Sleep", path: `/sleep` },
// // ];

// export default function Navbar() {
//   return (
//     <div className="Navbar">
//       <Link to="/login">LOGIN</Link>
//       <Link to="/register">REGISTER</Link>
//     </div>
//   );
// }

import * as React from "react";
import { Link } from "react-router-dom";
// import { useAuthContext } from "contexts/auth"
//import codepath from "assets/codepath.svg"

import "./Navbar.css";

const navLinks = [
  { label: "Activity", path: `/activity` },
  { label: "Exercise", path: `/exercise` },
  { label: "Nutrition", path: `/nutrition` },
  { label: "Sleep", path: `/sleep` },
];

export default function Navbar() {
  // const { user, handleLogout } = useAuthContext()

  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            {/* <img src={codepath} alt="logo" /> */}
            LOGO
          </Link>
        </div>

        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}

          {/* {user?.email ? (
            <>
              <li className="secondary btn">
                <span onClick={handleLogout}>Logout</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="btn secondary">
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )} */}

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="btn secondary">
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
