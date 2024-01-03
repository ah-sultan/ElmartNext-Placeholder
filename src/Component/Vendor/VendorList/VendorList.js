"use client";
import { useEffect, useRef, useState } from "react";
import VendorCard from "./VendorCard";
import vendorsData from "./vendorsData.json";
import ShopProductSort from "@/Component/ShopSection/ShopWidget/ShopProductSort/ShopProductSort";

const VendorList = () => {
  const [shopListView, setShopListView] = useState(false);
  const vendorList = useRef();
  useEffect(() => {

    const screenWidth = document.documentElement.clientWidth
    if(screenWidth < 575){
      vendorList.current.classList.remove('vendor-grid-view')
      vendorList.current.classList.add('vendor-list-view')
    }

  }, [vendorList]);
  return (
    <>
      <section className="vendor-list-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-10 px-3">
              <ShopProductSort
                setShopListView={setShopListView}
                shopListView={shopListView}
                isNotFilterBtn={true}
              />
            </div>
            {/* Vander Page list */}
            <div
              ref={vendorList}
              id="grid-list-area"
              className={`row px-sm-2 mx-0 ${
                shopListView ? "vendor-list-view" : "vendor-grid-view"
              }`}
            >
              {vendorsData &&
                Array.isArray(vendorsData) &&
                [...vendorsData].map((data, index) => {
                  return <VendorCard key={index} {...data} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorList;
