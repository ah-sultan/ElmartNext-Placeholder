"use client";
import { useState } from "react";
import ShopProducts from "../ShopProducts/ShopProducts";
import ShopBannerSlider from "../ShopWidget/ShopBannerSlider/ShopBannerSlider";
import ShopPriceFilter from "../ShopWidget/ShopPriceFilter/ShopPriceFilter";
import ShopBrandFilter from "../ShopWidget/ShopBrandFilter/ShopBrandFilter";
import ShopCategoryFilter from "../ShopWidget/ShopCategoryFilter/ShopCategoryFilter";
import ShopColorFilter from "../ShopWidget/ShopColorFilter/ShopColorFilter";
import ShopSizeFilter from "../ShopWidget/ShopSizeFilter/ShopSizeFilter";
import ShopProductSort from "../ShopWidget/ShopProductSort/ShopProductSort";
import ShopPromo from "../ShopWidget/ShopPromo/ShopPromo";
import ShopProductV2 from "../ShopProductV2/ShopProductV2";
import Pagination from "@/Component/widgets/Pagination/Pagination";

const ShopPageShop = ({
  sideBarOrder,
  isBanner,
  isPagination,
  isInfinite,
  isProductCard2,
}) => {
  const [shopListView, setShopListView] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <section className="shop-page">
        <div className="container">
          <div className="row">
            {/* Shop Page Side Bar */}
            <div
              className={`col-lg-3 shop-page-sidebar-wrapper ${sideBarOrder} ${
                openSidebar ? "open" : ""
              }`}
            >
              <div className="sidebar-mobile-close-btn" onClick={() => setOpenSidebar(false)}>
                <i className="fa-solid fa-circle-xmark bg-white rounded-circle"></i>
              </div>
              <div className="shop-sidebar-mobile">
                <div className="left-sidebar-shop">
                  <ShopCategoryFilter />
                  <ShopPriceFilter />
                  <ShopBrandFilter />
                  <ShopColorFilter />
                  <ShopSizeFilter />
                </div>
              </div>
              <ShopPromo />
            </div>
            <div className="col-lg-9">
              <div className="container p-0 shop-all-product-area">
                <div className="row">
                  {isBanner && (
                    <div className="col-sm-12 mb-10">
                      <ShopBannerSlider />
                    </div>
                  )}
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-10">
                    <ShopProductSort
                      isProductCard2={isProductCard2}
                      shopListView={shopListView}
                      setShopListView={setShopListView}
                      setOpenSidebar={setOpenSidebar}
                    />
                  </div>
                </div>
                {!isProductCard2 && (
                  <ShopProducts shopListView={shopListView} />
                )}
                {isProductCard2 && <ShopProductV2 />}

                {isPagination && (
                  <nav className="shop-page-navigation">
                    <Pagination />
                  </nav>
                )}
                {isInfinite && (
                  <div className="shop-infinite-scroll">
                    <button type="button" className="button-b">
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPageShop;
