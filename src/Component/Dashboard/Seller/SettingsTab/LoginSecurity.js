import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import React, { useState } from "react";
import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";

const LoginSecurity = () => {
  const [showFormModal, setShowFromModal] = useState(false);

  // Handle update
  const handleUpdate = () => {
    setTimeout(() => {
      setShowFromModal(false)
    }, 1000);
  };
  return (
    <>
      <div className="security-area">
        <h3>Login Security</h3>
        <p>
          Email: <span>user.example@gmail.com</span>
        </p>
        <p className="info-edit-btn" onClick={() => setShowFromModal(true)}>Change Email & Password</p>
      </div>
      <MagnifyPopup handleHide={setShowFromModal} show={showFormModal}>
        <ProfileEditForm handleEdit={handleUpdate} />
      </MagnifyPopup>
    </>
  );
};

export default LoginSecurity;
