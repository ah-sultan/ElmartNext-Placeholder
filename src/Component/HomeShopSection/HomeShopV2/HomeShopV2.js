"use client";
import { useState } from "react";
import ProductDetailsPopup from "../../ProductDetailsPopup/ProductDetailsPopup";
import ShopCatCard from "../../ShopSection/ProductCard/ShopCatCard";
import homeShopV2Data from "./homeShopV2Data.json";
import useTimer from "@/feature/useTimer/useTimer";
import Link from "next/link";

const HomeShopV2 = () => {
  const timer = useTimer("30 March 2024 0:00:00 UTC+0");

  return (
    <>
      <section className="shop-section-v2">
        <div className="container">
          <div className="row mb-25">
            <div className="col-xl-12 section-title-wrapper">
              <div className="best-deals">
                <div className="section-title">
                  <span>best deals</span>
                  <h2>Best Deals of the Week</h2>
                </div>
                <div className="single-product-countdown">
                  <span>Hurry Up! Offer ends in</span>
                  <div className="deal-product-timer" id="timer4">
                    <div id="days">
                      <span>{timer.days}</span>d
                    </div>
                    <div id="hours">
                      <span>{timer.hours}h</span>
                    </div>
                    <div id="minutes">
                      <span>{timer.minutes}m</span>
                    </div>
                    <div id="seconds">{timer.seconds}s</div>
                  </div>
                </div>
              </div>
              <div className="shop-section-category">
                <div className="brws-all-prod">
                  <Link href="/shop">Browse all Product</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid">
            {homeShopV2Data &&
              Array.isArray(homeShopV2Data) &&
              [...homeShopV2Data].map((data, index) => {
                return (
                  <div
                    className="col-xxl-3 col-xl-4 col-lg-4 col-12 col-sm-6"
                    key={index}
                  >
                    <ShopCatCard
                      {...data}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default HomeShopV2;
