import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accord.css";
import paper from "src/assets/images/paper.png";
import DvCost from "./DvCost";

function Accord() {
  return (
    <div className="bg-light">
      <div className="d-flex align-items-center mb-4">
        <img
          src={paper}
          className="me-3"
          style={{ width: "22.75px", height: "22.75px" }}
          alt="Vite logo"
        />
        <h4 className="text-primary fw-bold">Find the right visa for you!</h4>
      </div>
      <Accordion defaultActiveKey="0" className="bg-light">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-success">
            Diversity Visa Cost
          </Accordion.Header>
          <Accordion.Body className="bg-light">
            <div className="p-5 bg-white rounded-4">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <span
                  className="ps-2 fs-3"
                  style={{ borderLeft: "4px solid #00579B" }}
                >
                  Mandatory Government Fees for Green Cards
                </span>
                <button type="button" class="btn btn-danger btn-lg">
                  Apply now
                </button>
              </div>
              <DvCost />
            </div>
            <p className="text-end mt-4">
              Fees are subject to change, please use this calculator
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Diversity Visa Timeline</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Diversity Visa FAQs</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Accord;
