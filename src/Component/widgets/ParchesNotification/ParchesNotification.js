"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ParchesNotification = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const scrollThreshold = 2000;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (
        scrollTop > scrollThreshold &&
        scrollTop > lastScrollTop &&
        !isPopupVisible
      ) {
        setIsPopupVisible(true);
      } else if (
        scrollTop < lastScrollTop &&
        scrollTop < scrollThreshold &&
        isPopupVisible
      ) {
        setIsPopupVisible(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, isPopupVisible]);

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <div
      id="purchase-notification"
      style={{ bottom: `${isPopupVisible ? "20px" : "-200px"}` }}
    >
      <div className="pn-cls-btn" onClick={handleClose}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="purchase-content">
        <div className="image">
          <Image
            quality={100}
            width={158}
            height={207}
            src="/image/home-two/categories-section/fashion-shoes.png"
            alt="Shoes"
            style={{ width: "auto", height: "60px" }}
          />
        </div>
        <div className="info">
          <h4>S I Bonny Just Purchased</h4>
          <h2>Convert For Man Stretching Shoe - with shoe laces</h2>
          <p>About 30 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default ParchesNotification;
