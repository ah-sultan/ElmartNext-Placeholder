"use client";

import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

const ReturnTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stickyNavHandler = () => {
      window.pageYOffset > 300 ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", stickyNavHandler);
  }, [show]);

  const handleScrollTop = () => {
    const options = {
      duration: 700,
      smooth: true,
    };
    animateScroll.scrollToTop(options);
  };

  return (
    <>
      <button
        type="button"
        id="return-to-top"
        onClick={() => handleScrollTop()}
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <i className="fa-solid fa-arrow-up-long"></i>
      </button>
    </>
  );
};

export default ReturnTopBtn;
