import React from "react";
import Header from "src/components/header/Header";
import seconds_10 from "src/assets/images/10_seconds.png";
import { Link } from "react-router-dom";

function Begin() {
  return (
    <div>
      <div className="position-absolute w-100">
        <Header />
      </div>
      <div className="row">
        <div className="col-5 bg-primary pt-5">
          <div className="mt-5 px-6 pt-5">
            <h1 className="text-white  efs-1">
              Eletronic <span className="text-success">diversity visa</span>{" "}
              entry form
            </h1>
            <h1 className="text-white mt-5 fw-light">
              Here you will fill all your information to reach your dream.
            </h1>
            <div className="d-flex mt-5 align-items-center">
              <img src={seconds_10} className="logo" alt="Vite logo" />
              <span className="text-white ms-3">10 minutes to finish</span>
            </div>
            <div
              className="px-5 mt-5 text-white"
              style={{ borderLeft: "5px solid white" }}
            >
              <p>
                This is a full copy of the official DV Lottery application form.
                Use it for training only. You will need to apply on the official
                website www.dvlottery.state.gov when it opens to take part in
                the lottery.
              </p>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="d-flex flex-column justify-content-between h-100">
            <div
              className="d-flex align-items-center justify-content-center "
              style={{ minHeight: "100vh" }}
            >
              <div className="w-75 ">
                <h1 className="mb-4 text-primary w-100">
                  Are you ready to begin?
                </h1>
                <div class="d-grid mt-5 m-auto">
                  <Link to="/step" className="w-100">
                    <button class="btn btn-success w-75  p-auto" type="button">
                      Start!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <p className=" float-right text-end ">
                Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Begin;
