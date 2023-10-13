import React from "react";

import "./Header.css";
import logo from "src/assets/images/logo.png";
import US from "src/assets/images/US.png";
import Dropdown from "src/components/dropdown/Dropdown";
import { Link } from "react-router-dom";

function Header({ bgColor = false }) {
  return (
    <nav
      className={`nv navbar-light ${bgColor ? "bg-primary" : ""}`}
      style={{ height: "119px" }}
    >
      <div
        className="d-flex justify-content-between w-100"
        style={{ height: "inherit" }}
      >
        <Link to="/home">
          <img src={logo} className="logo" alt="Vite logo" />
        </Link>

        <div className="d-flex justify-content-between  ">
          <Dropdown bgColor={bgColor} />
          <button
            type="button"
            class={`btn text-white px-5 ms-4 ${
              bgColor ? "btn-outline-success" : "btn-outline-primary "
            }`}
            style={{ height: "63px", marginTop: "31px" }}
          >
            LIVE CHAT
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
