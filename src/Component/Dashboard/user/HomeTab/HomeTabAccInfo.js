import React, { useState } from "react";
import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";
import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";

const HomeTabAccInfo = ({profileData}) => {
  const [showPopup, setShowPopup] = useState(false);

  // Const handle Popup show
  const handlePopupVisibility = () => {
    setShowPopup(true);
  };
  return (
    <>
      <div className="acc-info">
        <h3>Account Information</h3>
        <div className="row">
          {profileData &&
            Array.isArray(profileData) &&
            [...profileData].map((data, index) => {
              return (
                <div key={index} className="col-lg-6">
                  <div className="title">
                    <h4>{data.title}</h4>
                    <p
                      className="info-edit-btn"
                      onClick={() => handlePopupVisibility()}
                    >
                      Edit
                    </p>
                  </div>
                  <div className="info">
                    {data.description &&
                      Array.isArray(data.description) &&
                      [...data.description].map((desData, index2) => {
                        return <p key={index2}>{desData}</p>;
                      })}
                    <p
                      className="info-edit-btn"
                      onClick={() => handlePopupVisibility()}
                    >
                      Change Address
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <MagnifyPopup show={showPopup} handleHide={setShowPopup}>
        <ProfileEditForm />
      </MagnifyPopup>
    </>
  );
};

export default HomeTabAccInfo;
