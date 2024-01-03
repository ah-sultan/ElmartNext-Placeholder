import Link from "next/link";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import { useState } from "react";

const ProfileTab = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");



  return (
    <>
      <div id="seller-dshbrd-profile">
        <h2>Profile</h2>
        <div className="company-seller-details">
          <h3>Store Details</h3>
          <p>
            <strong>Store Name:</strong> Lady Apparel
          </p>
          <p>
            <strong>Store Email:</strong> lady.apparel@demo.com
          </p>
          <p>
            <strong>Year Established:</strong> 2021
          </p>
          <p>
            <strong>Store Category:</strong> Women Fashion
          </p>
          <p>
            <strong>Store Location:</strong>{" "}
            {`Saddlebow Road, King's Lynn, Norfolk, PE34 3AG, United Kingdom`}
          </p>
        </div>
        <div className="company-seller-details">
          <h3>Seller Details</h3>
          <p>
            <strong>Name:</strong> Lily Daisy
          </p>
          <p>
            <strong>Email:</strong> lily-daisy@example.com
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {`Saddlebow Road, King's Lynn, Norfolk, PE34 3AG, United Kingdom`}
          </p>
          <div className="change-password">
            <Link
              className="change-seller-pass"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setShowPopup(true);
                setPopupType("changePassword");
              }}
            >
              Change Password
            </Link>
          </div>
        </div>
        <Link
          className="seller-profile-edit-btn button-b"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setShowPopup(true);
            setPopupType("editProfile");
          }}
        >
          Edit Profile
        </Link>

        <MagnifyPopup handleHide={setShowPopup} show={showPopup}>
          {popupType === "changePassword" && <ChangePassword />}
          {popupType === "editProfile" && <EditProfile />}
        </MagnifyPopup>
      </div>
    </>
  );
};

export default ProfileTab;
