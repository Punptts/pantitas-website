import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.css";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="global-logo" src={logo} alt="logo" />
      <div class="flex flex-row items-center">
        <Link className="navbar-item" to="/">
          PROJECT
        </Link>
        {/* <Link className="navbar-item" to="/projects">
          Projects
        </Link> */}
        <Link className="navbar-item" to="/about">
          ABOUT
        </Link>
      </div>
    </nav>
  );
}
