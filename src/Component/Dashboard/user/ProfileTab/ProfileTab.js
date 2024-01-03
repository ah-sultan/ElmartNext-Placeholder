import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import Link from "next/link";
import { useState } from "react";
import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";

const ProfileTab = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  // Handle Update
  const handleUpdate = () => {
    setTimeout(() => setShowEditModal(false), 1000);
  };
  return (
    <>
      <div id="user-dshbrd-profile">
        <h2>My Profile</h2>
        <div className="profile-area">
          <h3>Name</h3>
          <p className="name">Ronal M. Griffim</p>
          <div className="contact">
            <p>
              <i className="fa-solid fa-location-dot"></i> 47 Farringdon St, Holborn
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> user.example@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-circle-check"></i> Verified
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a
            corporis vero sint, sequi quia deserunt ipsum commodi eaque beatae!
          </p>
        </div>
        <div className="profile-area">
          <h3>About</h3>
          <table>
            <tbody>
              <tr>
                <td>Gender:</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Birthday:</td>
                <td>10/11/1990</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <Link href="mailto:user.example@gmail.com">
                    user.example@gmail.com
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>
                  <Link href="tel:+44 020 7353 2648">+44 020 7353 2648</Link>
                </td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  47 Farringdon St, Holborn, London, EC4A 4LL, United Kingdom
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="add-new-info-btn">
          <Link
            className="button-b info-edit-btn"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShowEditModal(true);
            }}
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <MagnifyPopup show={showEditModal} handleHide={setShowEditModal}>
        <ProfileEditForm handleEdit={handleUpdate} />
      </MagnifyPopup>
    </>
  );
};

export default ProfileTab;
