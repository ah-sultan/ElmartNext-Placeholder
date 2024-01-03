"use client";
import useTimer from "@/feature/useTimer/useTimer";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

const HeaderTopBanner = () => {
  
  const timer = useTimer("1 February 2024 0:00:00 UTC+0")

  // top bar visibility handler
  const topBar = useRef();
  const handleHideBar = () => {
    topBar.current.style.height = 0;
    setTimeout(() => {
      topBar.current.style.display = "none";
    }, 1000);
  };



  return (
    <>
      <div
        className="header-top-banner"
        ref={topBar}
        style={{ transition: "all .3s linear ", overflow: "hidden" }}
      >
        <p>
          Use the promo code <strong>OFF50</strong> to get a flat $50 discount!
        </p>
        <span className="htb-close-btn" onClick={() => handleHideBar()}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="single-product-countdown">
          <span>Offer ends in:</span>
          <div className="deal-product-timer" id="timer4">
            <div id="days">{timer.days}<span>d</span></div>
            <div id="hours">{timer.hours}<span>h</span></div>
            <div id="minutes">{timer.minutes}<span>m</span></div>
            <div id="seconds">{timer.seconds}<span>s</span></div>
          </div>
        </div>
        <Link href="/shop" className="htb-btn button-a">
          Show Now
        </Link>
      </div>
    </>
  );
};

export default HeaderTopBanner;
