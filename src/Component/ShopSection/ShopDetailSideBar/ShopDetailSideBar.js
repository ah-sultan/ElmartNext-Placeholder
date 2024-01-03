"use client";
import ShopProdRevDesc from "../ShopProdRevDesc/ShopProdRevDesc";
import ShopProductDetails from "../ShopProductDetails/ShopProductDetails";
import ShopPriceFilter from "../ShopWidget/ShopPriceFilter/ShopPriceFilter";
import ShopBrandFilter from "../ShopWidget/ShopBrandFilter/ShopBrandFilter";
import ShopCategoryFilter from "../ShopWidget/ShopCategoryFilter/ShopCategoryFilter";
import ShopColorFilter from "../ShopWidget/ShopColorFilter/ShopColorFilter";
import ShopSizeFilter from "../ShopWidget/ShopSizeFilter/ShopSizeFilter";
import ShopPromo from "../ShopWidget/ShopPromo/ShopPromo";
import { useState } from "react";

const ShopDetailSideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <>
      <section className="shop-detials-sidebar overflow-x-hidden">
        <div className="container">
          <div className="row">
            <div className={`col-lg-3 shop-page-sidebar-wrapper ${showSideBar ? "open" : ""}`}>
              <div className="sidebar-mobile-close-btn" onClick={()=> setShowSideBar(false)}>
                <i className="fa-solid fa-circle-xmark"></i>
              </div>
              <div className="shop-sidebar-mobile">
                <div className="left-sidebar-shop">
                  <ShopCategoryFilter />
                  <ShopPriceFilter />
                  <ShopBrandFilter />
                  <ShopColorFilter />
                  <ShopSizeFilter />
                </div>
                <ShopPromo />
              </div>
            </div>
            <div className="col-lg-9 p-0">
              <div className="row">
                <div className="col-lg-10 mx-auto p-0 m-0 d-flex justify-content-center">
                  <button className="shop-details-sidebar-toggle" onClick={() => setShowSideBar(true)}>
                    <i className="fa-solid fa-bars"></i> Show Sidebar
                  </button>
                </div>
              </div>
              <ShopProductDetails />
              <ShopProdRevDesc />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailSideBar;
