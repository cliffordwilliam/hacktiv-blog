import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Public() {
  const links = [
    { name: "Home", endpoint: "/public-home" },
    // { name: "Sign Up", endpoint: "/register" },
    { name: "Login", endpoint: "/login" },
  ];

  return (
    <>
      <Header links={links}></Header>
      <Outlet />
      <Footer links={links}></Footer>
    </>
  );
}
