"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";

const ShopSizeGuide = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="product-size-guide">
        <Link
          href="#size-guide-popup"
          className="size-guide-btn button-a"
          onClick={(e) => {
            e.preventDefault(), setShowPopup(true);
          }}
        >
          <i className="fa-solid fa-pen-ruler"></i> Size Guide
        </Link>
      </div>
      <MagnifyPopup show={showPopup} handleHide={setShowPopup}>
        <div id="size-guide-popup">
          <Image
            quality={100}
            src="/image/shop-page/shop-details/size-guide.jpg"
            alt="Size Guide"
            className="img-fluid"
            width={692}
            height={870}
          />
        </div>
      </MagnifyPopup>
    </>
  );
};

export default ShopSizeGuide;
