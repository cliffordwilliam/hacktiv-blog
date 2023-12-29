import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer({ links }) {
  return (
    <footer className="card">
      <div className="c p1 vf">
        <div className="g">
          <nav>
            <ul className="menu vf">
              <li>
                <Link to={"/public-home"}>
                  <h2>
                    <img className="w1" src={logo} alt="" />
                  </h2>
                </Link>
              </li>
              <li>
                <Link className="b" to={"/about-us"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="b" to={"/our-services"}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link className="b" to={"/privacy-policy"}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="menu vf">
              <li>
                <h2>Navigation</h2>
              </li>
              {links.map(({ name, endpoint }) => (
                <li key={endpoint}>
                  <Link onClick={close} to={endpoint}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p>
          &copy; {new Date().getFullYear()}. All rights reserved. Public footer.
        </p>
      </div>
    </footer>
  );
}
