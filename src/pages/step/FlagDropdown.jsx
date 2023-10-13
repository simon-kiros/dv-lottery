import React, { useState } from "react";
import cn from "src/assets/images/CN.png";
import arrow from "src/assets/images/angle-right.svg";
import "src/components/dropdown/Dropdown.css";

function FlagDropdown() {
  return (
    <div>
      <ul className={`list-unstyled mb-0 `}>
        <li className="">
          <div className="border-end">
            <img src={cn} className="pe-3 us" alt="Vite logo" />
            <span className="dropdown-toggle2">
              <img
                src={arrow}
                className={`pe-3 us arrow-close`}
                style={{ filter: "brightness(0) invert(0)", rotate: "90deg" }}
              />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FlagDropdown;
