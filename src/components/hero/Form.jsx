import React from "react";

import arrowRight from "src/assets/images/arrow-right.svg";
import "./Form.css";
import { Link } from "react-router-dom";
function Form() {
  return (
    <div className="hero-form bg-white p-5 rounded-5">
      <a href="" className="text-decoration-none d-flex">
        <img src={arrowRight} className="pe-3 arrowRight" alt="Vite logo" />
        <h3 className="text-success">Check now for free!</h3>
      </a>
      <div>
        <h1 className="fw-bold text-primary">Green card eligibility</h1>{" "}
      </div>
      <div>
        <form>
          <div className="d-flex mt-4">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="First Name"
            />
            <input
              class="form-control form-control-lg ms-3"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="d-flex mt-4">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Email address"
            />
            <input
              class="form-control form-control-lg ms-3"
              type="text"
              placeholder="Your email again"
            />
          </div>
          <select class="form-select form-select-lg mt-4">
            <option selected>Your country of birth</option>
            <option value="1">One</option>
          </select>
          <select class="form-select form-select-lg mt-4">
            <option selected>Marial Status</option>
            <option value="1">One</option>
          </select>
        </form>
      </div>
      <div className="form-check mt-4">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label text-primary" for="flexCheckDefault">
          Yes, I finished high school OR I have qualifying training.
        </label>
      </div>
      <div class="d-grid mt-5">
        <Link to="/start" className="w-100">
          <button class="btn  btn-success w-100" type="button">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
