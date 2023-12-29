import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header({ links, buttons }) {
  function open(e) {
    document.getElementById("m1").style.left = "0";
    document.getElementById("overlay").classList.add("on");
  }

  function close(e) {
    document.getElementById("m1").style.left = "-100%";
    document.getElementById("overlay").classList.remove("on");
  }

  return (
    <header className="card">
      <div className="c p1 hf">
        <Link className="mra" to={"/public-home"}>
          <img className="w1" src={logo} alt="" />
        </Link>
        <nav>
          <ul id="m1" className="hf menu">
            <li>
              <Link className="mra menu-toggler b" to={"/public-home"}>
                <img className="w1" src={logo} alt="" />
              </Link>
            </li>
            {links.map(({ name, endpoint }) => (
              <li key={endpoint}>
                <Link className="b" onClick={close} to={endpoint}>
                  {name}
                </Link>
              </li>
            ))}
            {buttons &&
              buttons.map(({ name, callback }) => (
                <li key={callback}>
                  <button onClick={callback}>{name}</button>
                </li>
              ))}
            <li>
              <button className="menu-toggler" onClick={close}>
                Close
              </button>
            </li>
          </ul>
          <button className="menu-toggler" onClick={open}>
            Menu
          </button>
        </nav>
      </div>
      <div id="overlay"></div>
    </header>
  );
}
