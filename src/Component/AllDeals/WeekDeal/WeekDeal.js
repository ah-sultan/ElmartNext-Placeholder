"use client";
import useTimer from "@/feature/useTimer/useTimer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WeekDeal = () => {
  const timer = useTimer("30 April 2024 0:00:00 UTC+0");
  return (
    <>
      <section className="deal-of-the-week">
        <div className="container">
          <div className="row">
            <div className="col-md-7 deal-week-left col-sm-12">
              <div className="dwl-titlennav">
                <div className="section-title">
                  <span>Deal of the Week</span>
                  <h2>Deal of the Week Let&apos;s Shopping Today</h2>
                </div>
                <div className="deal-week-offer">
                  <span>Up to</span>
                  <h4>28%</h4>
                  <span>Off</span>
                </div>
              </div>
              <div className="dwl-content">
                <p>Hurry Up! Offer ends in</p>
                <div className="dwl-timer" id="timer-v2">
                  <div id="days">
                    <span> Days </span> <br />
                    {timer.days}
                  </div>
                  <div id="hours">
                    <span> Hours</span> <br />
                    {timer.hours}
                  </div>
                  <div id="minutes">
                    <span>Min </span> <br />
                    {timer.minutes}
                  </div>
                  <div id="seconds">
                    <span> Sec</span> <br />
                    {timer.seconds}
                  </div>
                </div>
                <Link href="/shop" className="dwl-button button-b">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-md-5 deal-week-right col-sm-12">
              <Image
                quality={100}
                width={499}
                height={619}
                src="/image/home-two/deal-of-the-week/image-1.png"
                alt="Deal of The Week"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeekDeal;
