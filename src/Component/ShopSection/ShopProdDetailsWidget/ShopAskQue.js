import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import Link from "next/link";
import { useState } from "react";

export const ShopAskQue = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="ask-a-question">
        <Link
          href="#ask-a-question-popup"
          id="ask-a-question"
          className="button-a"
          onClick={(e) => {
            e.preventDefault();
            setShowPopup(true);
          }}
        >
          Ask An Expert?
        </Link>
      </div>
      <MagnifyPopup show={showPopup} handleHide={setShowPopup}>
        <div id="ask-a-question-popup">
          <div className="form">
            <h2>Ask An Expert</h2>
            <div className="form-row">
              <label htmlFor="yourname">Your Name*</label>
              <input type="text" name="ask-a-question" id="yourname" />
            </div>
            <div className="form-row">
              <label htmlFor="youremail">Your Email*</label>
              <input type="email" name="ask-a-question" id="youremail" />
            </div>
            <div className="form-row">
              <label htmlFor="sub">Subject*</label>
              <input type="text" name="ask-a-question" id="sub" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message*</label>
              <textarea name="ask-a-question" id="message" rows="5"></textarea>
            </div>
            <div className="submit-btn">
              <input type="submit" defaultValue="Submit" />
            </div>
          </div>
        </div>
      </MagnifyPopup>
    </>
  );
};
