"use client";

import { useEffect, useRef } from "react";

const Preloader = () => {
  const loader = useRef();

  const handlerLoader = () => {
    loader.current.style.opacity = 0;
    setTimeout(() => {
      loader.current.style.display = "none";
    }, 500);
  };
  useEffect(() => {
    window.onload = setTimeout(() => {
      handlerLoader();
    }, 800);
  }, []);
  return (
    <>
      <div id="preloader" ref={loader} style={{ transition: "all .5s linear" }}>
        <div id="loader"> </div>
        <div className="pre-close-btn" onClick={handlerLoader}>
          <i className="fa-solid fa-x"></i>
        </div>
      </div>
    </>
  );
};

export default Preloader;
