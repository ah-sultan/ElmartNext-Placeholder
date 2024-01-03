import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import { useRef, useState } from "react";

const DeactivateModal = ({
  setShowModal,
  showModal,
  handleDeactivate,
  warningMessage,
  successMessage,
}) => {
  const [delSuccess, setDelSuccess] = useState(false);

  const domMsg = useRef(null);
  const btnBlock = useRef(null);

  // Handle Deleting UI Interactivity
  const handleDelUiIn = () => {
    domMsg.current.style.transition = "all .4s ease-in-out";
    btnBlock.current.style.transition = "all .4s ease-in-out";
    domMsg.current.style.opacity = 0;
    btnBlock.current.style.opacity = 0;

    // show Successfully deleted message
    setTimeout(() => {
      domMsg.current.style.display = "none";
      btnBlock.current.style.display = "none";
      setDelSuccess(true);
    }, 500);

    // Hide Popup after view deleted message
    setTimeout(() => {
      setShowModal(false);
    }, 1500);

    // Remove Successfully deleted message
    setTimeout(() => { 
      setShowModal(false);
    }, 2000);
  };

  const handleDeactivateData = () => {
    handleDeactivate();
    handleDelUiIn();
  };
  return (
    <>
      <MagnifyPopup show={showModal} handleHide={setShowModal}>
        <div id="delete-popup" className="">
          <h2>Are Your Sure?</h2>

          <p style={{ display: "block" }} ref={domMsg}>
            {warningMessage}
          </p>
          <div ref={btnBlock}>
            <button type="button"
              className="delete-yes button-a"
              style={{ display: "inline-block" }}
              onClick={() => handleDeactivateData()}
            >
              Yes
            </button>{" "}
            <button type="button"
              className="delete-no button-b"
              style={{ display: "inline-block" }}
              onClick={() => setShowModal(false)}
            >
              No
            </button>
          </div>

          <p
            className="delete-success"
            style={{
              display: `${delSuccess ? "block" : "none"}`,
            }}
          >
            {successMessage}
          </p>
        </div>
      </MagnifyPopup>
    </>
  );
};

export default DeactivateModal;
