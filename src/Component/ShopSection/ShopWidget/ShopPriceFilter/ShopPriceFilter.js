"use client";

import { useEffect, useRef, useState } from "react";

const ShopPriceFilter = () => {
  const [priceValue] = useState({minPrice : 1, maxPrice : 130})
  const [minVal, setMinVal] = useState(priceValue.minPrice);
  const [maxVal, setMaxVal] = useState(priceValue.maxPrice);
  const [priceGap] = useState(5);


  const handleRangeChange = (e, isMin) => {
    const newVal = parseInt(e.target.value);
    if (isMin) {
      if (maxVal - newVal < priceGap) {
        setMinVal(maxVal - priceGap);
      } else {
        setMinVal(newVal);
      }
    } else {
      if (newVal - minVal < priceGap) {
        setMaxVal(minVal + priceGap);
      } else {
        setMaxVal(newVal);
      }
    }
  };


  return (
    <>
      <div className="lsb-widget-2">
        <h2 className="lsb-widget-title">Price Filter</h2>
        <div className="price-filter-wrap">
          <div className="price-range-slider">
            <div className="progress" style={{

              left : `${(minVal / priceValue.maxPrice) * 100}%`,
              right: `${100 - (maxVal / priceValue.maxPrice) * 100}%`,

            }}></div>
          </div>
          <div className="range-input">
            <input
              type="range"
              min={priceValue.minPrice}
              max={priceValue.maxPrice}
              value={minVal}
              className="range-min"
              onChange={(e) => handleRangeChange(e, true)}
            />
            <input
              type="range"
              min={priceValue.minPrice}
              max={priceValue.maxPrice}
              value={maxVal}
              className="range-max"
              onChange={(e) => handleRangeChange(e, false)}
            />
          </div>
          <div className="price-input">
            <p>Price:</p>
            <div className="field">
              <span>$</span>
              <input
                type="number"
                disabled
                className="input-min"
                value={minVal}
              />
            </div>
            <div className="separator">-</div>
            <div className="field">
              <span>$</span>
              <input
                type="number"
                disabled
                className="input-max"
                value={maxVal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPriceFilter;
