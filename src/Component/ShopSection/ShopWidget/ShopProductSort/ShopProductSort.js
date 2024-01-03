"use client";
import { memo, useEffect, useMemo, useState } from "react";

const ShopProductSort = ({
  setShopListView,
  shopListView,
  isProductCard2,
  setOpenSidebar,
  isNotFilterBtn
}) => {
  const [selectSort, setSelectSort] = useState({});
  const [showNicheSelect, setShowNicheSelect] = useState(false);
  // Select sort Dummy Data
  const selectSortData = useMemo(() => {
    return [
      { title: "Default", value: 0 },
      { title: "Sort (A > Z)", value: 0 },
      { title: "Sort (Z > A)", value: 0 },
      { title: "Sort (Hight > Low)", value: 0 },
      { title: "Sort (Low > High)", value: 0 },
    ];
  }, []);

  useEffect(() => {
    setSelectSort(selectSortData[0]);
  }, [selectSortData]);

  return (
    <>
      <div className="product-sorting">
        <div className="sorting-results">
          <p>
            Showing <span>1-16 of 66 results</span>
          </p>
        </div>
        {!isNotFilterBtn && (
          <div
            className="shop-sidebar-mobile-toggle"
            onClick={() => setOpenSidebar(true)}
          >
            Filters
          </div>
        )}

        {!isProductCard2 && (
          <div className="grid-list-toggle">
            <span
              className={`${shopListView ? "" : "active"}`}
              id="shop-grid-btn"
              onClick={() => setShopListView(false)}
            >
              <i className="fa-solid fa-grip"></i>
            </span>
            <span
              className={`${shopListView ? "active" : ""}`}
              id="shop-list-btn"
              onClick={() => setShopListView(true)}
            >
              <i className="fa-solid fa-list"></i>
            </span>
          </div>
        )}

        <div className="sorting-select">
          <p>Sort by:</p>
          <select className="d-none">
            {[...selectSortData].map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.title}
                </option>
              );
            })}
          </select>
          <div
            className={`nice-select ${showNicheSelect && "open"}`}
            onClick={() => setShowNicheSelect((e) => !e)}
          >
            <span className="current">{selectSort.title}</span>
            <ul className="list">
              {[...selectSortData].map((option, index) => {
                return (
                  <li
                    key={index}
                    className={`option  ${
                      option.title === selectSort.title && "selected focus"
                    }`}
                    onClick={() => setSelectSort(option)}
                  >
                    {option.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ShopProductSort);
