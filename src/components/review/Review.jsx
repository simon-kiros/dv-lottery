import React from "react";
import star from "src/assets/images/star.png";
import avatar1 from "src/assets/images/avatar1.png";
import place from "src/assets/images/place.png";
import rating from "src/assets/images/rating.png";
import trustpilot from "src/assets/images/trustpilot.png";
import personal_opinion from "src/assets/images/personal_opinion.png";
import arrow_left from "src/assets/images/arrow_left.png";
import arrow_right from "src/assets/images/arrow_right.png";

function Review() {
  return (
    <div>
      <div className="row me-5">
        <div className="col-7">
          <div className="d-flex align-items-center mb-5">
            <img
              src={star}
              className=""
              alt="Vite logo"
              style={{ width: "34.57px", height: "26.48px" }}
            />
            <h3 className="fw-bold ms-3 text-primary">
              Our Jobs Speaks for Ourselves
            </h3>
          </div>
          <div className="mt-3 d-flex gap-4">
            <img
              src={avatar1}
              className=""
              alt="Vite logo"
              style={{ width: "72px", height: "72px" }}
            />
            <div className="ms-4">
              <a href="" className="text-primary text-decoration-underline ">
                Yeonseo Choi
              </a>
              <div className="mt-4">
                <span>1 Review</span>
                <span className="ms-3">
                  <img
                    src={place}
                    className="me-2"
                    alt="Vite logo"
                    style={{ width: "24px", height: "24px" }}
                  />
                  KR
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-top">
            <div className="d-flex justify-content-between">
              <img src={rating} className="" alt="Vite logo" />
              <span>Mar 20, 2023</span>
            </div>
            <div className="mt-5 text-primary">
              <h3>Highly Recommend</h3>
            </div>
            <div className="mt-4">
              <p>
                <small>
                  Nikka was a very professional consultant, always ready to
                  assist us each step of the way. I was reminded of everthing
                  and I had to take with to the interview and also later to pick
                  my passport and my son`s. Thanks once more, I certainly
                  recommend the service.
                </small>
              </p>
            </div>
            <div className="mt-5 fs-bold text-primary">
              <h5>Date of experience: February 28, 2023</h5>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={trustpilot} className="float-end me-5" alt="Vite logo" />
          <img src={personal_opinion} className="mt-5" alt="Vite logo" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex gap-5">
          <a href="">
            <img src={arrow_left} className="" alt="Vite logo" />
          </a>
          <a href="">
            <img src={arrow_right} className="" alt="Vite logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Review;
