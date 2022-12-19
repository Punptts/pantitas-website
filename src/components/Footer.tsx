import * as React from "react";
import "../styles/global.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="global-logo" src={logo} alt="logo" />
      <div>
        <p className="footer-item">Explore · Research · Design</p>
        <p className="footer-item">2022 I © Pantitas</p>
      </div>
    </footer>
  );
}
