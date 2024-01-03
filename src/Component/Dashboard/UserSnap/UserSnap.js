import Image from "next/image";
import { useRef, useState } from "react";

const UserSnap = ({ userImage = "", name, email }) => {
  const [image, setImage] = useState(`${userImage}`);

  const uploadInput = useRef();

  // const handle update
  const handleClick = () => {
    uploadInput.current.click();
  };

  // Handle upload
  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageSrc = e.target.result;

        setImage(imageSrc);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="user-id-snap">
        <div className="id-snap-img">
          <Image
            quality={100}
            width={78}
            height={78}
            id="profilePic"
            src={image}
            alt="User"
            className="img-fluid"
          />
          <div
            id="uimg-uploadBtn"
            className="cng-user-img-btn"
            onClick={() => handleClick()}
          >
            <i className="fa-solid fa-pen"></i>
          </div>
          <input
            type="file"
            id="uimg-uploadInput"
            style={{ display: "none" }}
            ref={uploadInput}
            onChange={(e) => handleUpload(e)}
          />
        </div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};

export default UserSnap;
