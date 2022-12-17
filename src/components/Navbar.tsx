import { Link } from "gatsby";
import * as React from "react";

export default function navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
