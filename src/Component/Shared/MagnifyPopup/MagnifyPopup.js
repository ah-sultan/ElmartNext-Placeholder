"use client";
import { memo, useCallback, useEffect, useRef } from "react";
import style from "./MagnifyPopup.module.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

const MagnifyPopup = ({
  children,
  handleHide = () => {},
  show = false,
  className,
}) => {
  const popupWrapper = useRef();
  const popupBg = useRef();
  const popupContent = useRef();

  const handlePopup = useCallback(
    (value) => {
      if (value) {
        document.documentElement.style.overflowY = "hidden";
        popupWrapper.current.style.display = "block";
        setTimeout(() => {
          popupBg.current.style.opacity = "0.8";
          popupBg.current.style.visibility = "visible";
          popupContent.current.style.opacity = "1";
          popupContent.current.style.visibility = "visible";
        }, 500);
      } else {
        handleHide(false);
        document.documentElement.style.overflowY = "unset";
        popupWrapper.current.style.display = "none";
        setTimeout(() => {
          popupBg.current.style.opacity = "0";
          popupBg.current.style.visibility = "hidden";
          popupContent.current.style.opacity = "0";
          popupContent.current.style.visibility = "hidden";
        }, 500);
      }
    },
    [handleHide]
  );

  useEffect(() => {
    if (show) {
      handlePopup(true);
    } else {
      handlePopup(false);
    }
  }, [show, handlePopup]);

  return (
    <>
      <div ref={popupWrapper} className={` ${style.magnify_Popup_Wrapper}`}>
        <div
          ref={popupBg}
          className={style.magnify_Popup_Bg}
          onClick={() => handlePopup(false)}
        ></div>
        <div
          className={`${style.magnify_Popup_Content} mfp-content ${className}`}
          ref={popupContent}
        >
          <div>
            <div className={`${style.magnify_Popup_Content_Wrapper} `}>
              {children}
            </div>
            <button
              type="button"
              className={style.magnify_PopupClose_Btn}
              onClick={() => handlePopup()}
            >
              {<span className={openSans.className}>×</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MagnifyPopup);
