import React, { useState, useEffect } from "react";

import "./Dropdown.css";
import us from "src/assets/images/US.png";
import arrow from "src/assets/images/angle-right.svg";
import { useLocation } from "react-router-dom";

function Dropdown({ bgColor }) {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();

  const onclickHandler = () => {
    setShow(!show);
    if (!bgColor) setColor(false);
    else setColor(true);
  };

  useEffect(() => {
    if (!bgColor) setColor(false);
    else setColor(true);
    if (show) setColor(show);
  }, [show]);

  const country = [
    "Francais",
    "Deutsch",
    "Portugues",
    "Espanol",
    "Italiano",
    "Pyccknn",
    "China",
  ];
  return (
    <div>
      <ul className={`nv-dropdown ${show ? "bg-dark-blue" : ""}`}>
        <li className="">
          <div className="">
            <img src={us} className="pe-3 us" alt="Vite logo" />
            <span className={color ? "" : "text-primary"} href="#">
              English
            </span>
            <span className="dropdown-toggle2 " onClick={onclickHandler}>
              <img
                src={arrow}
                className={`pe-3 us ${show ? "arrow-close" : "arrow-open"} ${
                  color ? "icon-white" : "icon-dark"
                }`}
                style={{}}
              />
            </span>
          </div>

          <ul
            className={`dropdown mt-2 ${
              show ? "dropdown-show bg-dark-blue" : "dropdown-hide"
            }`}
          >
            {country.map((i) => (
              <li className="mt-2">
                <a className="dropdown-item" href="#">
                  <img src={us} className="pe-3 us" alt="Vite logo" />
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
