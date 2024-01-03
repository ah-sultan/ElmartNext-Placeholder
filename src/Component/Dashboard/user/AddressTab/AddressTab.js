import Link from "next/link";
import { Fragment, useState } from "react";
import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import addressBookData from "./addressBookData.json";
import AddressForm from "./EditAddress";
import DeleteModal from "@/Component/widgets/Modals/DeleteModal"; 

const AddressTab = () => {
  const [showDelModal, setShowDelModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectAdd, setSelectAdd] = useState(
    addressBookData && addressBookData[0]
  );

  // Handle Delete
  const handledDelete = () => {};

  return (
    <>
      <div id="user-dshbrd-address">
        <div className="all-address-cards">
          {addressBookData &&
            Array.isArray(addressBookData) &&
            [...addressBookData].map((data, index) => {
              return (
                <div key={index} className="address-book">
                  <div className="title">
                    <div className="name">
                      <input
                        type="radio"
                        name="user-dashboard-address"
                        id={data.locationType}
                        defaultChecked={selectAdd?.id === data.id ? true : false}
                        onClick={() => setSelectAdd(data)}
                      />
                      <label htmlFor={data.locationType}>{data.name}</label>
                    </div>
                    <p className="location-type">{data.locationType}</p>
                  </div>
                  <address className="address">
                    {data.address &&
                      Array.isArray(data.address) &&
                      [...data.address].map((text, index) => {
                        return (
                          <Fragment key={index}>
                            {text}
                            <br />
                          </Fragment>
                        );
                      })}
                  </address>
                  <div className="address-buttons">
                    <Link
                      href=""
                      className="address-edit button-b"
                      onClick={() => setShowFormModal(true)}
                    >
                      Edit
                    </Link>{" "}
                    <Link
                      href="/"
                      className="address-delete button-a"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDelModal(true);
                      }}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="add-new-info-btn">
          <Link
            className="button-b"
            id="add-address-btn"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShowFormModal(true);
            }}
          >
            Add New Address
          </Link>
        </div>
      </div>
      <DeleteModal
        handleDelete={handledDelete}
        showModal={showDelModal}
        setShowModal={setShowDelModal}
        successMessage="Address Deleted Successfully"
        warningMessage="Are you sure you want to delete this address?"
      />
      <MagnifyPopup show={showFormModal} handleHide={setShowFormModal}>
        <AddressForm />
      </MagnifyPopup>
    </>
  );
};

export default AddressTab;
