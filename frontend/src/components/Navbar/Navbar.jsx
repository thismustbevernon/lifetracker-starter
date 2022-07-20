import * as React from "react"
import "./Navbar.css"
import NavLink from "../NavLink/NavLink"
import {Link} from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="logo"/>
                    </Link>
                </div>
                <NavLink handleLogout={props.handleLogout} isLogin={props.isLogin}  user={props.user} setUser={props.setUser}/>
            </div>
        </nav>
    )
  }