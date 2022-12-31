import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="global-logo" src="/images/logo.png" alt="logo" />
      </Link>
      <div className="flex flex-row items-center">
        <Link className="navbar-item" to="/">
          PROJECT
        </Link>
        {/* <Link className="navbar-item" to="/blog">
          BLOG
        </Link> */}
        <Link className="navbar-item" to="/about">
          ABOUT
        </Link>
      </div>
    </nav>
  );
}
