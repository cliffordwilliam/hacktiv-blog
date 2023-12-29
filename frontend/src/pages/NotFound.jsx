import React from "react";
import logo from "../assets/logo.svg";

export default function NotFound() {
  return (
    <main className="cc">
      <div className="hf p2 card">
        <img className="w1" src={logo} alt="" />
        <div className="vf">
          <h2>404</h2>
          <p>
            The page you are looking for is not available. We apologize for the
            inconvenience.
          </p>
        </div>
      </div>
    </main>
  );
}
