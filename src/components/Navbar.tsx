import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.css";
import "../styles/reset.css";
import RTFSD from "../images/RTFSD-logo.png";

export default function navbar() {
  return (
    <nav className="navbar">
      <img className="global-logo" src={RTFSD} alt="logo" />
      <div>
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
