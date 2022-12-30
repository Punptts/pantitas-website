import * as React from "react";
import "../styles/global.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <img className="global-logo" src={logo} alt="logo" />
        <p>Explore · Research · Design</p>
        <p>2022 I © Pantitas</p>
      </div>
    </footer>
  );
}
