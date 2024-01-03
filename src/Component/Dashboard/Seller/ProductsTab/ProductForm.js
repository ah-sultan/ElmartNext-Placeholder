import Image from "next/image";
import { useRef, useState } from "react";

const ProductForm = ({ type, handleEvent }) => {
  const [images, setImages] = useState([]);

  // Handle click Upload Input
  const uploadInput = useRef();

  // const handle update
  const handleClick = () => {
    uploadInput.current.click();
  };

  // Handle upload Images
  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageSrc = e.target.result;

        const setId = images.length + 1;

        const imageData = {
          id: `productImages-${setId}`,
          image: imageSrc,
        };

        setImages([...images, imageData]);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Handle Remove Images
  const handleRemoveImg = (id) => {
    if (images.length > 0) {
      const filteredImages = images.filter((img) => img.id !== id);
      setImages(filteredImages);
    }
  };

  return (
    <>
      <div
        className=""
        id={type === "add" ? "seller-product-add" : "seller-product-edit"}
      >
        <h2>{type === "add" ? "Add Product" : "Edit Product"}</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault(), handleEvent();
          }}
        >
          <div className="form-input">
            <button
              type="button"
              id="addProductImagesBtn"
              onClick={() => handleClick()}
            >
              Upload Product Image
            </button>
            <input
              type="file"
              name="add-product"
              id="addproductimage"
              multiple={true}
              style={{ display: "none" }}
              ref={uploadInput}
              onChange={(e) => handleUpload(e)}
            />
            <div id="addproductimagereview">
              {images.length > 0 &&
                Array.isArray(images) &&
                [...images].map((data, index) => {
                  return (
                    <div className="addproductimage-thumb" key={index}>
                      <button
                        type="button"
                        className="addproductimage-delete-btn"
                        onClick={() => handleRemoveImg(data.id)}
                      >
                        X
                      </button>
                      <Image
                        quality={100}
                        src={data.image}
                        alt="Product images"
                        width={1000}
                        height={1000}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="apname">Product Name*</label>
            <input type="text" name="add-product" id="apname" required />
          </div>
          <div className="form-input">
            <label htmlFor="aprice">Price*</label>
            <input type="number" name="add-product" id="aprice" required />
          </div>
          <div className="form-input">
            <label htmlFor="astock">Stock*</label>
            <input type="number" name="add-product" id="astock" required />
          </div>
          <div className="form-input">
            <label htmlFor="colorPicker">Select Product Color*</label>
            <div className="color-picker-wrap">
              <input
                type="color"
                name="add-product"
                id="colorPicker"
                required
              />
              <p>Selected Colors:</p>
              <div id="selectedColors"></div>
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="asize">Size*</label>
            <input type="text" name="add-product" id="asize" required />
          </div>
          <div className="form-input">
            <label htmlFor="acat">Category*</label>
            <input type="text" name="add-product" id="acat" required />
          </div>
          <div className="form-input">
            <label htmlFor="atags">Tags*</label>
            <input type="text" name="add-product" id="atags" required />
          </div>
          <div className="form-input">
            <label htmlFor="asdesc">Product Summary*</label>
            <textarea
              name="add-product"
              id="asdesc"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-input">
            <label htmlFor="afdesc">Full Description*</label>
            <textarea
              name="add-product"
              id="afdesc"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="form-row">
            {type === "add" && (
              <input type="submit" name="edit-product" defaultValue="Add Product" />
            )}
            {type === "edit" && (
              <>
                <input type="submit" name="edit-product" defaultValue="Save" />
                <input
                  className="prod-dlt-btn"
                  type="submit"
                  name="edit-product"
                 defaultValue="Delete"
                  onClick={() => handleEvent()}
                />
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
