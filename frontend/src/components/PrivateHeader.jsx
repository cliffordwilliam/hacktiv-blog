import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateHeader() {
  const navigate = useNavigate();

  function onLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header>
      <h1>Private header</h1>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
}
