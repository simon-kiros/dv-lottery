import React from "react";

function Time({ name, val }) {
  return (
    <div
      className="bg-black rounded-4 px-3 py-1 ms-3 d-flex flex-column align-items-center"
      style={{ minWidth: "90px", height: "88px" }}
    >
      <div className="text-white fs-2 fw-bold">{val}</div>
      <div className="" style={{ color: "#A5DEFF" }}>
        <small>{name}</small>
      </div>
    </div>
  );
}

export default Time;
