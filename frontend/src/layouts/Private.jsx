import React from "react";
import { Outlet } from "react-router-dom";
import PrivateHeader from "../components/PrivateHeader";
import PrivateFooter from "../components/PrivateFooter";

export default function Global() {
  return (
    <>
      <PrivateHeader />
      <Outlet />
      <PrivateFooter />
    </>
  );
}
