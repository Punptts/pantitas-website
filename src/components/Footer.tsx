import * as React from "react";
import "../styles/global.css";
import RTFSD from "../images/RTFSD-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="global-logo" src={RTFSD} alt="logo" />
      <div>
        <h4 className="footer-item">Explore · Research · Design</h4>
        <h4 className="footer-item">2022 I © punptts</h4>
      </div>
    </footer>
  );
}
