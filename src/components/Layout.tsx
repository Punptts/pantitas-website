import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
