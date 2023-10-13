import React from "react";
import Header from "src/components/header/Header";
import CN from "src/assets/images/CN.png";
import "./Step.css";
import FlagDropdown from "./FlagDropdown";
import Stepper from "./Stepper";
import arrow_right from "src/assets/images/arrow_right.png";
import nike from "src/assets/images/nike.png";
import { Link } from "react-router-dom";

function Step() {
  return (
    <div>
      <div className="position-absolute w-100">
        <Header />
      </div>
      <div className="row">
        <div className="col-3 bg-primary pt-5">
          <div className="mt-5 ps-4 pt-5">
            <Stepper />
          </div>
        </div>

        <div className="col-9">
          <div className="d-flex flex-column h-100">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center justify-content-start ms-5 h-100">
                <div className="w-50">
                  <h1 className="mb-4 text-primary fw-normal">
                    2.1. - Phone number
                  </h1>

                  <div className="input-group mb-3 mt-5">
                    <span
                      className="input-group-text bg-white border-start-0 border-top-0"
                      id="basic-addon3"
                    >
                      <FlagDropdown />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 border-end-0 border-top-0 fs-2 "
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder="+1 604 123 4567"
                    />
                  </div>
                  <button className="btn btn-secondary btn-lg opacity-50 px-4 py-3 mt-4">
                    <span className="fw-bold me-3">OK</span>

                    <img src={nike} className="" style={{ height: "15px" }} />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-25 d-flex flex-column justify-content-between align-items-end">
              <div className="me-4">
                <Link
                  to="/start"
                  className="bg-primary rounded-start border border-white border-right px-5 py-4 "
                >
                  <img
                    src={arrow_right}
                    className=" "
                    style={{
                      rotate: "-90deg",
                      filter: "brightness(0) invert(1)",
                    }}
                    alt="Vite logo"
                  />
                </Link>

                <a href="" className="bg-primary rounded-end px-5 py-4 ">
                  <img
                    src={arrow_right}
                    className=" "
                    style={{
                      rotate: "90deg",
                      filter: "brightness(0) invert(1)",
                    }}
                    alt="Vite logo"
                  />
                </a>
              </div>
              <div>
                <p className="mt-4 me-4 text-primary">
                  Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step;
