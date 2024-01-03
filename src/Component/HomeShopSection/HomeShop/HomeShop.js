"use client";
import { useEffect } from "react";
import ProductCard from "../../ShopSection/ProductCard/ProductCard";
import homeShopData from "./homeShopData.json";

const HomeShop = ({ cardType }) => {

  useEffect(() => {
    // Handle Isotope Filtering
    if (window) {
      const Isotope = require("isotope-layout");
      const filters = document.querySelectorAll(".filters button");
      // Initialize Isotope
      const iso = new Isotope(".grid", {
        itemSelector: ".element-item",
        layoutMode: "fitRows",
      });
      for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener("click", function () {
          filters[i]?.nextElementSibling?.classList.remove("active");
          filters[i]?.previousElementSibling?.classList.remove("active");
          const filter = this.dataset.filter;
          iso.arrange({ filter });
          this.classList.add("active");
        });
      }
    }
  }, []);

  return (
    <>
      <section>
        <div className="shop-section">
          <div className="container">
            <div className="row mb-25">
              <div className="col-xl-12 section-title-wrapper">
                <div className="section-title">
                  <span>All Product</span>
                  <h2>Our Store Collection</h2>
                </div>
                <div className="shop-section-category ">
                  <div className="all-product-filter filters" id="filtered-btn">
                    <button type="button" className="active filtering-btn" data-filter="*">
                      Best Sellers
                    </button>
                    <button type="button" data-filter=".new " className="filtering-btn">
                      New Products
                    </button>
                    <button type="button" data-filter=".sale" className=" filtering-btn">
                      Sale Products
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row grid grid-items">
              {homeShopData &&
                Array.isArray(homeShopData) &&
                [...homeShopData].map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`col-xxl-3 col-xl-4 col-lg-4 col-12 col-sm-6 element-item ${data.filter
                        .toString()
                        .replace(",", " ")} `}
                    >
                      <ProductCard
                        cardType={cardType}
                        {...data}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomeShop;
