"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CheckoutCoupon = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="row">
      <div className="col-12 put-coupon">
        <div className="have-a-coupon">
          <div>
            <Image
              quality={100}
              width={22}
              height={22}
              src="/image/checkout-page/icon1.svg"
              alt="icon"
            />
            <span>
              Have a coupon?{" "}
              <span
                className="click-to-redeem"
                onClick={() => setShowForm(!showForm)}
              >
                Click here to enter your code
              </span>
            </span>
          </div>
        </div>
        <form
          className={`coupon-code checkout-coupn-area ${
            showForm ? "show" : ""
          }`}
          action="#"
        >
          <input
            type="text"
            name="coupon-code"
            id="coupon-code"
            placeholder="Discount Code"
          />
          <Link href="#" className="coupon-btn button-b">
            Apply
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CheckoutCoupon;
