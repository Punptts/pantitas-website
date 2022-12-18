import * as React from "react";
import "../styles/global.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <ul className="footerIcons">
          <img src="../images/icon.png" alt="icon1" />
          <img src="../images/icon.png" alt="icon2" />
          <img src="../images/icon.png" alt="icon3" />
        </ul>
        <p className="footerText"> Copyright © Pantitas 2022.</p>
      </footer>
    </div>
  );
}
