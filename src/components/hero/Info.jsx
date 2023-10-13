import React, { useEffect } from "react";

import "./Info.css";
import Time from "./Time";
import people from "src/assets/images/icon_people.png";
import group from "src/assets/images/Group.png";
import bag from "src/assets/images/bag.png";
import chat from "src/assets/images/chat.png";
import clock from "src/assets/images/clock.png";
import heart from "src/assets/images/heart.png";

function Info() {
  const [counter, setCounter] = React.useState(60);
  setInterval(() => setCounter(counter - 1), 2000);

  useEffect(() => {
    if (counter === -1) setCounter(60);
  }, [counter]);

  return (
    <div className="mt-3">
      <div>
        <h1 className="fw-bold">
          <span className="text-success efs-1">Win the right to live</span>
          <span className="text-white"> in the USA!</span>
        </h1>
      </div>
      <div className="d-flex mt-5">
        <div
          className="flex-grow-1 my-3 text-white fs-5 ps-3 "
          style={{ borderLeft: "6px solid white" }}
        >
          The official deadline is running, so hurry up and{" "}
          <a href="" className="text-white text-decoration-underline">
            apply here!
          </a>
        </div>
        <Time name="DAYS" val="27" />
        <Time name="HOURS" val="24" />
        <Time name="MINUTES" val="60" />
        <Time name="SECONDS" val={counter} />
      </div>
      <div className="text-white mt-5 fs-6">
        <div>
          <img src={people} className="pe-3 " alt="Vite logo" />
          <span>
            50,000 people and their families will Live, Work and Study in USA.
          </span>
        </div>
        <div className="mt-3">
          <img src={group} className="pe-3 " alt="Vite logo" />
          <span>OFFICIAL USA Governmental program.</span>
        </div>
        <div className="mt-3">
          <img src={bag} className="pe-3 " alt="Vite logo" />
          <span>Your chance to LIVE, WORK & STUDY in USA.</span>
        </div>
        <div className="mt-3">
          <img src={clock} className="pe-3 " alt="Vite logo" />
          <span>Simple registration within 5 minutes.</span>
        </div>
        <div className="mt-3">
          <img src={chat} className="pe-3 " alt="Vite logo" />
          <span>Personal support in every step.</span>
        </div>
        <div className="mt-3">
          <img src={heart} className="pe-3 " alt="Vite logo" />
          <span>Double chance for married people to win the Green Card.</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
