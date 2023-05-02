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
        <Link
          className="navbar-item hover:text-blue-500"
          to="/"
          activeClassName="active"
        >
          PROJECT
        </Link>
        <Link className="navbar-item" to="/blog" activeClassName="active">
          BLOG
        </Link>
        <Link className="navbar-item" to="/about" activeClassName="active">
          ABOUT
        </Link>
      </div>
    </nav>
  );
}
