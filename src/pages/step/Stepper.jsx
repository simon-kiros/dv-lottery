import React from "react";

import "./Stepper.css";
function Stepper() {
  return (
    <div>
      <ul className="progressbar">
        <li className="counter active">
          <span className="circle"></span>
          <span className="title">Name</span>
        </li>

        <li className="counter active">
          <span className="circle"></span>
          <span className="title">Contact Information</span>
        </li>
        <li className="counter">
          <span className="circle"></span>
          <span className="title">Gender</span>
        </li>
        <li className="counter">
          <span className="circle"></span>
          <span className="title">Birth Information</span>
        </li>
        <li className="counter">
          <span className="circle"></span>
          <span className="title">Country of Eligibility</span>
        </li>
        <li className="counter">
          <span className="circle"></span>
          <span className="title">Photograph</span>
        </li>
        <li className="counter">
          <span className="circle"></span>
          <span className="title">Mailing Address</span>
        </li>
        <li className="counter">
          <span className="circle"></span>
          <span className="title">Additional Information</span>
        </li>
        <li className="counter">
          <span className="circle"></span>
          <span className="title">Payment</span>
        </li>
      </ul>
    </div>
  );
}

export default Stepper;
