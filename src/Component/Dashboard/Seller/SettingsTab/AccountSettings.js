import DeactivateModal from "@/Component/widgets/Modals/DeactivateModal";
import DeleteModal from "@/Component/widgets/Modals/DeleteModal";
import Link from "next/link";
import { useState } from "react";

const AccountSettings = () => {
  const [showDelModal, setShowDelModal] = useState(false);
  const [showDeaModal, setShowDeaModal] = useState(false);
  const [isActiveAcc, setIsActiveAcc] = useState(true);

  const handleDelete = () => {
    "";
  };

  const handleDeactivate = () => {
    "";
  };
  return (
    <>
      <div className="security-area">
        <h3>Account Settings</h3>
        <div className="switch-settings">
          <div className="title">
            <h4>Enable Notifications?</h4>
            <p>Get analytics and orders notifications from your store.</p>
          </div>
          <div className="form-check form-switch">
            <input
              name="privacy"
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="2fa-enabler"
              defaultChecked
            />
          </div>
        </div>
        <div className="switch-settings">
          <div className="title">
            <h4>Deactivate store?</h4>
            <p>
              {`Your account and "store" will be temporarily deactivated until you login back.`}
            </p>
          </div>
          <div>
            <Link
              href="/"
              className="acc-dea-btn button-b"
              onClick={(e) => {
                e.preventDefault();
                setShowDeaModal(true);
              }}
            >
              Deactivate
            </Link>
          </div>
        </div>
        <div className="switch-settings">
          <div className="title">
            <h4>Delete store permanently?</h4>
            <p>
              {`Your account including the "store" will be deleted permanently. It cannot be undone once deleted!`}
            </p>
          </div>
          <div>
            <Link
              href="/"
              className="acc-del-btn button-b"
              onClick={(e) => {
                e.preventDefault();
                setShowDelModal(true);
              }}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
      <DeleteModal
        showModal={showDelModal}
        setShowModal={setShowDelModal}
        handleDelete={handleDelete}
        warningMessage="Are you sure you want to delete your account? This action cannot be undone! Please proceed with caution."
        successMessage="Your Account Successfully Deleted"
      />
      <DeactivateModal
        showModal={showDeaModal}
        setShowModal={setShowDeaModal}
        handleDeactivate={handleDeactivate}
        warningMessage="Are you sure you want to deacivate your account? You can always come back just login and your account will activated."
        successMessage="Your Account Successfully Deactivate"
        isDeactivated={!isActiveAcc}
      />
    </>
  );
};

export default AccountSettings;
