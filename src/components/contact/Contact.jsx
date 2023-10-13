import React from "react";

import "./Contact.css";
import arrow from "src/assets/images/angle-right.svg";

function Contact() {
  return (
    <div className="py-4 border-top my-3">
      <div className="fs-3 text-success">Let's keep in touch for news</div>
      <div
        className="mt-30 row p-5  bg-light rounded-3 m-3"
        style={{ borderLeft: "10px solid #00579B" }}
      >
        <div className="col-6 d-flex align-items-center">
          <span className="">
            Subscribe to be the first do receive updates and be in advantage on
            your application proccess
          </span>
        </div>
        <div className="col-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg border-end-0"
              placeholder="your email here"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text bg-white " id="basic-addon2">
              <span className=" btn-subscribe">
                Subscribe <span className="ms-1 fw-bold">{">"}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
