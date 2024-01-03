"use client";
import Image from "next/image";
import ProductDetailsImages from "../ShopWidget/ProductDetailsImages/ProductDetailsImages";
import ShopProductColor from "../ShopProdDetailsWidget/ShopProductColor";
import ShopProductSize from "../ShopProdDetailsWidget/ShopProductSize";
import ShopProductQty from "../ShopProdDetailsWidget/ShopProductQty";
import { ShopAskQue } from "../ShopProdDetailsWidget/ShopAskQue";
import ShopColorCompare from "../ShopProdDetailsWidget/ShopColorCompare";
import ShopCountDown from "../ShopProdDetailsWidget/ShopCountDown";
import ShopSizeGuide from "../ShopProdDetailsWidget/ShopSizeGuide";

const ShopProductDetails = ({
  isAskQue,
  isColorCompare,
  isCountDown,
  isQtyLeft,
  isImgSlider,
  isSizeGuide,
}) => {
  const countRating = 5;
  return (
    <>
      <section className="product-details-section">
        <div className="container">
          <div className="row">
            {/* Shop Product Images */}
            <div className="col-md-6 col-sm-12 product-images">
              <ProductDetailsImages isImgSlider={isImgSlider} />
            </div>
            {/* Shop Product Information */}
            <div className="col-md-6 col-sm-12 product-information">
              <h2>Embroidered Square Neck Sheath Gown</h2>
              <div className="price">
                <span className="ori-price">$140</span>
                <span>$120</span>
              </div>
              {/* Product rating Section */}
              <div className="prod-details-review">
                <div className="rating-star">
                  {Array(countRating)
                    .fill()
                    .map((_, index) => {
                      return (
                        <i key={index} className="fa-solid fa-star">
                          &nbsp;
                        </i>
                      );
                    })}
                  <span>&nbsp;6 Reviews</span>
                </div>
              </div>
              <div className="shop-details-divider"></div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                as but the majority have suffered alteration in some form.
              </p>
              {/* In Stock Section */}
              <div className="analytics">
                <p>
                  <i className="fa-regular fa-eye"></i> 28 people are viewing
                  this right now
                </p>
                {!isQtyLeft && (
                  <p className="in-stock">
                    <Image
                      quality={100}
                      width={18}
                      height={18}
                      className="img-fluid"
                      src="/image/shop-page/shop-details/in-stock.svg"
                      alt="in stock"
                    />{" "}
                    In Stock 56
                  </p>
                )}
                {isQtyLeft && (
                  <>
                    <div className="shop-sec-qty-left">
                      Hurry Up! Only 80 Left!
                    </div>
                    <div className="shop-sec-progress-bar">
                      <div className="shop-sec-progress"></div>
                    </div>
                  </>
                )}
              </div>

              {isCountDown && <ShopCountDown />}

              {!isColorCompare && (
                <ShopProductColor
                  colors={["#952847", "#626262", "#263C97", "#424264"]}
                />
              )}
              {isColorCompare && (
                <ShopColorCompare
                  images={[
                    "/image/shop-page/shop-details/icon1.png",
                    "/image/shop-page/shop-details/icon2.png",
                    "/image/shop-page/shop-details/icon3.png",
                    "/image/shop-page/shop-details/icon4.png",
                  ]}
                />
              )}

              <ShopProductSize sizes={["M", "L", "XL", "XXL"]} />
              {isSizeGuide && <ShopSizeGuide />}
              <ShopProductQty />
              {isAskQue && <ShopAskQue />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopProductDetails;
