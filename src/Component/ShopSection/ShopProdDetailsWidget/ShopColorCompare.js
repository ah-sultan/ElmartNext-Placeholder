import Image from "next/image";
import { useState } from "react";

const ShopColorCompare = ({ images }) => {
  const [selectImage, setSelectImage] = useState(images && images[0]);
  const [compareImg, setCompareImg] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [renderCompareImg, setRenderCompareImg] = useState([]);

  // Handle Select Image

  const handleImageSelect = (img) => {
    setSelectImage(img);
  };

  //   handle popup select color images
  const handleCompareImg = ({ img, id, isActive }) => {
    // Find Has image in compareImg state
    const findImg = compareImg.find((item) => item.id === id);

    if (findImg) {
      const removeImage = compareImg.filter((item) => item.id !== findImg.id);
      setCompareImg([...removeImage]);
    } else {
      const currentImg = {
        id: id,
        img: img,
        isActive,
      };
      setCompareImg([...compareImg, currentImg]);
    }
  };

  return (
    <>
      <div className="color-selection">
        <h2>Color</h2>
        <div className="prod-colors-select-v2">
          {images &&
            Array.isArray(images) &&
            [...images].map((image, index) => {
              return (
                <span
                  style={{ transition: "all .2s ease-in-out" }}
                  className={`color-choice-v2  ${
                    selectImage === image ? "active" : ""
                  }`}
                  key={index}
                >
                  <Image
                    quality={100}
                    width={83}
                    height={102}
                    src={image}
                    alt="Color Image Icon"
                    style={{ height: "90%", width: "90%" }}
                    onClick={() => handleImageSelect(image)}
                  />
                </span>
              );
            })}
        </div>
        <div className="color-compare">
          <button
            type="button"
            className="color-compare-btn button-a"
            onClick={() => setShowPopup(true)}
          >
            <i className="fa-solid fa-swatchbook"></i> Color Compare
          </button>
        </div>
      </div>
      <div className={`shop-details-popup ${showPopup ? "open" : ""}`}>
        <div className="popup-content">
          <span
            className="color-compare-close"
            onClick={() => setShowPopup(false)}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </span>
          <h2>Color Comparison</h2>
          <div className="color-options">
            {images &&
              Array.isArray(images) &&
              [...images].map((image, index) => {
                const isSelected = compareImg.find((item) => item.id === index);

                return (
                  <div key={index} className="color-option">
                    <Image
                      quality={100}
                      width={83}
                      height={102}
                      src={image}
                      className={`${isSelected ? "selected" : ""}`}
                      alt="Color Image Icon"
                      style={{ height: "50px", width: "50px" }}
                      onClick={() =>
                        handleCompareImg({
                          id: index,
                          img: image,
                          isActive: true,
                        })
                      }
                    />
                  </div>
                );
              })}
          </div>
          <button
            type="button"
            className="compare-selected"
            onClick={() => setRenderCompareImg(compareImg)}
          >
            Compare Selected
          </button>
          <div className="color-details">
            {renderCompareImg &&
              Array.isArray(renderCompareImg) &&
              [...renderCompareImg].map((data, index) => {
                return (
                  <Image
                    quality={100}
                    width={83}
                    height={102}
                    key={index}
                    src={data.img}
                    alt="render image"
                    className="img-fluid"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopColorCompare;
