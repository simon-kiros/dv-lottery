import React from "react";
import logo from "src/assets/images/logo.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="d-flex justify-content-between">
          <img src={logo} className="footer-logo" alt="Vite logo" />
          <div className="d-flex justify-content-between gap-4 align-items-center ">
            <a href="#" className="text-white text-decoration-underline">
              Terms of Service
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Legal Disclaimer
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Refund Policy
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Terms of Use
            </a>
          </div>
        </div>
        <div>
          <p className="text-white border-top pt-3 ">
            <small>
              Disclaimer: GovAssist is not affiliated with any United States
              government agency or department. Costs for consulting services do
              NOT include any government application, medical examination,
              filing, or biometric fees. This website does not provide legal
              advice and we are not a law firm. None of our customer service
              representatives are lawyers and they also do not provide legal
              advice. We are a private, internet-based travel and immigration
              consultancy provider dedicated to helping individuals travel to
              the United States. You may apply by yourself directly at
              travel.state.gov or at uscis.gov. GovAssist is affiliated with the
              UT law firm GovAssist Legal which provides legal services on
              immigration matters. Only licensed immigration professionals can
              provide advice, explanation, opinion, or recommendation about
              possible legal rights, remedies, defenses, options, selection of
              forms or strategies.
            </small>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <small>
            Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
          </small>
        </p>
      </div>
    </div>
  );
}

export default Footer;
