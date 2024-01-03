"use client";
import Image from "next/image";
import MagnifyPopup from "../Shared/MagnifyPopup/MagnifyPopup";
import { Fragment, useState, useSyncExternalStore } from "react";
import { handlePopup } from "./handlePopup";
import Link from "next/link";
import PopupImages from "./PopupImages";

const ProductDetailsPopup = ({ rating = 5 }) => {
  const [selectColor, setSelectColor] = useState("#952847");
  const [selectSize, setSelectSize] = useState("M");

  // Rating Validation
  const countRating = typeof rating === "number" && rating > 0 ? rating : 0;
  const status = useSyncExternalStore(
    handlePopup.subscribe,
    handlePopup.getSnapshot,
    () => true
  );

  return (
    <>
      <MagnifyPopup
        show={status.show}
        handleHide={handlePopup.hidePopup}
        className="shop-details-top-popup"
      >
        <div className="row" id="shop-details-top-area">
          <div className="col-md-6 col-sm-12 product-images">
            <PopupImages />
          </div>
          <div className="col-md-6 col-sm-12 product-information">
            <h2>
              {status?.data?.title
                ? status.data.title
                : "Embroidered Square Neck Sheath Gown"}
            </h2>
            <div className="price">
              <span className="ori-price">$140</span>
              <span>$120</span>
            </div>
            <div className="prod-details-review">
              <div className="rating-star">
                {Array(countRating)
                  .fill()
                  .map((_, index) => {
                    return (
                      <Fragment key={index}>
                        <i className="fa-solid fa-star"></i>{" "}
                      </Fragment>
                    );
                  })}
                <span>&nbsp;6 Reviews</span>
              </div>
            </div>
            <div className="shop-details-divider"></div>
            <p>
              There are many variations of passages of Lorem Ipsum available, as
              but the majority have suffered alteration in some form.
            </p>
            <div className="analytics">
              <p>
                <i className="fa-regular fa-eye"></i> 28 people are viewing this
                right now
              </p>
              <p className="in-stock">
                <Image
                  quality={100}
                  width={24}
                  height={24}
                  className="img-fluid"
                  src="image/shop-page/shop-details/in-stock.svg"
                  alt="in stock"
                />{" "}
                In Stock 56
              </p>
            </div>
            <div className="color-selection">
              <h2>Color</h2>
              {/* Color Selection */}
              <div className="prod-colors-select">
                {["#952847", "#626262", "#263C97", "#424264"].map(
                  (color, index) => {
                    return (
                      <span
                        onClick={() => setSelectColor(color)}
                        key={index}
                        className={`color-choice prod-color4 ${
                          selectColor === color ? "active" : ""
                        }`}
                        style={{
                          background: color,
                          border: `2px solid ${color}`,
                          transition: ".3s all ease",
                        }}
                      ></span>
                    );
                  }
                )}
              </div>
            </div>
            <div className="prod-size-select">
              <h2>Size</h2>
              {/* Size Selection */}
              <div className="tag-cloud-v2">
                {["M", "L", "XL", "XL"].map((size, index) => {
                  return (
                    <div
                      onClick={() => setSelectSize(size)}
                      key={index}
                      className={`tag-item-v2 ${
                        selectSize === size ? "active" : ""
                      }`}
                    >
                      <span>{size}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="prod-qty-btns">
              <form className="item-quantity" action="#">
                <span className="decrease qty-btn">-</span>
                <input disabled="" type="number"defaultValue="1" />
                <span className="increase qty-btn">+</span>
              </form>
              <Link href="#" className="add-to-cart button-b">
                Add To Cart
              </Link>
              <div className="wishlist">
                <Link href="#">
                  <i className="fa-solid fa-rotate"></i>
                </Link>
                <Link href="/wishlist">
                  <i className="fa-solid fa-heart"></i>
                </Link>
              </div>
            </div>
            <div className="shop-details-divider"></div>
            <div className="product-other-info">
              <p>
                SKU : <span>KE-91039</span>
              </p>
              <p>
                Category : <span>Kitchen</span>
              </p>
              <p>
                Tags : <span>Beer, Foamer</span>
              </p>
            </div>
            <div className="social-share">
              <span>Share</span>{" "}
              <Link href="#">
                <i
                  style={{ color: "#3E75B2" }}
                  className="fa-brands fa-facebook-f"
                ></i>
              </Link>{" "}
              <Link href="#">
                <i
                  style={{ color: "#E12828" }}
                  className="fa-brands fa-pinterest"
                ></i>
              </Link>{" "}
              <Link href="#">
                <i
                  style={{ color: "#000" }}
                  className="fa-brands fa-x-twitter"
                ></i>
              </Link>{" "}
            </div>
          </div>
        </div>
      </MagnifyPopup>
    </>
  );
};

export default ProductDetailsPopup;
