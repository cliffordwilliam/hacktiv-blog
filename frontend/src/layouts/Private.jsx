import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Private() {
  const navigate = useNavigate();

  function onLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  }

  const links = [{ name: "Home", endpoint: "/" }];

  const buttons = [{ name: "Logout", callback: onLogout }];

  return (
    <>
      <Header links={links} buttons={buttons}></Header>
      <Outlet />
      <Footer links={links}></Footer>
    </>
  );
}
