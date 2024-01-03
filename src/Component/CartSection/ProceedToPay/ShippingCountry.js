"use client";

import { useState } from "react";

const countries = [
  { value: 0, title: "Select Country" },
  { value: 1, title: "United Kingdom" },
  { value: 2, title: "Spain" },
  { value: 3, title: "Portugal" },
  { value: 4, title: "Russia" },
  { value: 5, title: "Bangladesh" },
  { value: 6, title: "India" },
];
const ShippingCountry = () => {
  const [openNiche, setOpenNiche] = useState(false)
  const [selectCountry, setSelectCountry] = useState(countries[0]);

  // Handle country Selection
  const handleSelection = (data) => {

    setSelectCountry(data)
  }

  return (
    <>
      <div className="shipping-select">
        <select className="d-none">
          {countries && Array.isArray(countries) && [...countries].map((option, index) => {
            return (
              <option value={option.value} key={index}>
                {option.title}
              </option>
            );
          })}
        </select>
        <div className={`nice-select ${openNiche ? "open" : " "}`} onClick={() => setOpenNiche(!openNiche)}>
          <span className="current">{selectCountry.title}</span>
          <ul className="list">
            {countries && Array.isArray(countries) && [...countries].map((option, index) => {
              return (
                <li key={index} data-value={option.value} className={`option ${selectCountry.title === option.title ? "selected focus" : ""}` } onClick={() => handleSelection(option)}>
                  {option.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShippingCountry;
