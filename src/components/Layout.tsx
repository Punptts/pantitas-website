import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/global.css";

type Layout = {
  children: any;
};

export default function Layout({ children }: Layout) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
