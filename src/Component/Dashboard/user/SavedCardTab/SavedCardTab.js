import Image from "next/image";
import savedCardData from "./savedCardData.json";
import Link from "next/link";
import { useState } from "react";
import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import CardEditForm from "./CardEditForm";
import DeleteModal from "@/Component/widgets/Modals/DeleteModal"; 
const SavedCardTab = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  //  Handle Card edit From ---
  const handleEditForm = (value) => {
    setShowEditForm(value);
  };

  // Handle Delete
  const handleDelete = () => {
    "";
  };

  return (
    <>
      <div id="user-dshbrd-savedcards">
        <h2>My Card Details</h2>
        <div className="card-container">
          {savedCardData &&
            Array.isArray(savedCardData) &&
            [...savedCardData].map((data, index) => {
              return (
                <div key={index} className={`credit-card ${data.cardName}`}>
                  <div className="card-front">
                    <div className="logo">
                      <Image
                      quality={100}
                        width={80}
                        height={45}
                        src={data.cardLogo}
                        alt={data.logoAlt}
                        className="img-fluid"
                      />
                    </div>
                    <div className="card-number">{data.cardNumber}</div>
                    <div className="card-info">
                      <div className="card-holder">
                        {data?.cardInfo?.holder}
                      </div>
                      <div className="card-expiration">
                        {data?.cardInfo?.expiration}6
                      </div>
                    </div>
                    <div className="overlay">
                      <Link
                        href="#edit-popup"
                        className="edit-btn"
                        onClick={(e) => {
                          e.preventDefault(), handleEditForm(true);
                        }}
                      >
                        Edit
                      </Link>
                      <Link
                        href="#delete-popup"
                        className="delete-btn"
                        onClick={(e) => {
                          e.preventDefault(), setShowDeletePopup(true);
                        }}
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <MagnifyPopup show={showEditForm} handleHide={handleEditForm}>
        <CardEditForm />
      </MagnifyPopup>
      <DeleteModal
        handleDelete={handleDelete}
        showModal={showDeletePopup}
        setShowModal={setShowDeletePopup}
        successMessage="Card deleted Successfully"
        warningMessage="Are you sure you want to delete this card?"
      />
    </>
  );
};

export default SavedCardTab;
