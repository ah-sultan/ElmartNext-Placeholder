"use client";
import useTimer from "@/feature/useTimer/useTimer";
import Image from "next/image";
import Link from "next/link";
import { lazy, memo, useCallback, useEffect, useState } from "react";
import PopupCountDown from "./NewsLetterPopup/PopupCountDown";

const NewsLetterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) {
      const handlePopup = () => {
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      };

      window.onload = handlePopup();
    }
  }, [active]);

  return (
    <>
      <div className={`newsletter-popup ${showPopup ? "show" : ""}`}>
        <div className="nl-popup-container">
          <div
            className="close-icon"
            onClick={() => {
              setShowPopup(false);
              setActive(false);
            }}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </div>
          <div className="row p-0">
            <div className="col-sm-6 nlpopup-left">
              <Image
                quality={100}
                src="/image/home-one/newsletter/nl-popup.png"
                alt="Newsletter Popup"
                width={816}
                height={654}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6 nlpopup-right animate__animated animate__slideInLeft">
              <h2>Subscribe</h2>
              <p>
                Get weekly update. Sign up and get up to 20% off on your first
                purchase!
              </p>
              <form action="#">
                <input
                  type="email"
                  name="email-subscribe"
                  id="email-sub"
                  placeholder="Enter your email address"
                />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <PopupCountDown />
            </div>
            <div className="col-md-4">
              <div className="nlpopup-btn">
                <Link href="/shop" className="button-b">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(NewsLetterPopup);
