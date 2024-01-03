"use client";

import ShopCategoryFilter from "@/Component/ShopSection/ShopWidget/ShopCategoryFilter/ShopCategoryFilter";
import VendorInfoSidebar from "../VendorInfoSidebar/VendorInfoSidebar";
import ShopPriceFilter from "@/Component/ShopSection/ShopWidget/ShopPriceFilter/ShopPriceFilter";
import ShopBrandFilter from "@/Component/ShopSection/ShopWidget/ShopBrandFilter/ShopBrandFilter";
import ShopColorFilter from "@/Component/ShopSection/ShopWidget/ShopColorFilter/ShopColorFilter";
import ShopSizeFilter from "@/Component/ShopSection/ShopWidget/ShopSizeFilter/ShopSizeFilter";
import ShopPromo from "@/Component/ShopSection/ShopWidget/ShopPromo/ShopPromo";
import VendorInfoBanner from "../VendorInfoBanner/VendorInfoBanner";
import ShopProductSort from "@/Component/ShopSection/ShopWidget/ShopProductSort/ShopProductSort";
import ShopProducts from "@/Component/ShopSection/ShopProducts/ShopProducts";
import Pagination from "@/Component/widgets/Pagination/Pagination";
import { useState } from "react";


const VendorShop = ({
  isInfoBanner = false,
  sideBarOrder,
  isInfoSideBar = false,
}) => {
  const [shopListView, setShopListView] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <section className="shop-page">
        <div className="container">
          <div className="row">
            {/* Vendor left Side bar Section */}
            <div className={`col-lg-3 shop-page-sidebar-wrapper ${sideBarOrder} ${openSidebar ? "open" : ""}`}>
              <div className="sidebar-mobile-close-btn" onClick={() => setOpenSidebar(false)}>
                <i className="fa-solid fa-circle-xmark"></i>
              </div>
              <div className="shop-sidebar-mobile">
                <div className="left-sidebar-shop">
                  {isInfoSideBar && <VendorInfoSidebar />}
                  <ShopCategoryFilter />
                  <ShopPriceFilter />
                  <ShopBrandFilter />
                  <ShopColorFilter />
                  <ShopSizeFilter />
                </div>
                <ShopPromo />
              </div>
            </div>
            {/* Vendor Shop Section */}
            <div className="col-lg-9">
              <div className="container p-0 shop-all-product-area">
                {/* Vendor details */}
                {isInfoBanner && (
                  <div className="row">
                    <div className="col-sm-12 mb-10">
                      <VendorInfoBanner />
                    </div>
                  </div>
                )}
                {/* Vendors Product Sorting */}
                <div className="row">
                  <div className="col-sm-12 mb-10">
                    <ShopProductSort
                      shopListView={shopListView}
                      setShopListView={setShopListView}
                      setOpenSidebar={setOpenSidebar}
                      
                    />
                  </div>
                </div>
                {/* Vendor Shop Products */}
                <ShopProducts
                  shopListView={shopListView}
                  setShopListView={setShopListView}
                />
              </div>
              <nav className="shop-page-navigation">
                <Pagination />
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorShop;
