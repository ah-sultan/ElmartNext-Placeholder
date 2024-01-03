"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ShopPromo = () => {
  const [showPromo, setShowPromo] = useState(true);
  return (
    <>
      <div className="left-bar-promo">
        <div className="promo-close-btn" onClick={() => setShowPromo(false)}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className={`left-bar-promo-wrapper ${showPromo ? "" : "hide"} `}>
          <div className="big-sale">
            <Image
              quality={100}
              width={156}
              height={65}
              src="/image/shop-page/promo-text.png"
              alt="Big Sale"
              className="img-fluid"
            />
          </div>
          <Link href="/shop" className="promo-button">
            Shop Now
          </Link>
          <div className="promo-image">
            <Image
              quality={100}
              width={171}
              height={260}
              src="/image/shop-page/promo-image.png"
              alt="Discount"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPromo;
