import { Link } from "gatsby";
import * as React from "react";
import "../styles/global.css";
import "../images/pun-logo.svg";

export default function navbar() {
  return (
    <nav className="navbar">
      <img src="../images/pun-logo.svg" alt="logo" />
      <div>
        <Link className="navLinks" to="/">
          Home
        </Link>
        <Link className="navLinks" to="/projects">
          Projects
        </Link>
        <Link className="navLinks" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
