"use client";
import { useState } from "react";

const BellingDetails = () => {
  const [openCountry, setOpenCountry] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  const [country, setCountry] = useState({ id: 0, name: "United Kingdom" });
  const [city, setCity] = useState({ id: 0, name: "City 1" });
  const countries = [
    { id: 0, name: "United Kingdom" },
    { id: 1, name: "Spain" },
    { id: 2, name: "Portugal" },
    { id: 3, name: "Russia" },
    { id: 4, name: "Bangladesh" },
  ];

  const cities = [
    { id: 0, name: "City 1" },
    { id: 1, name: "City 2" },
    { id: 2, name: "City 3" },
    { id: 3, name: "City 4" },
    { id: 4, name: "City 5" },
  ];

  return (
    <>
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form action="#">
          <div className="input-name">
            <input
              type="text"
              name="checkout-form"
              id="fname"
              placeholder="First Name*"
              required
            />
            <input
              type="text"
              name="checkout-form"
              id="lname"
              placeholder="Last Name*"
              required
            />
          </div>
          <div className="input-contact">
            <input
              type="email"
              name="checkout-form"
              id="email"
              placeholder="Email Address*"
              required
            />
            <input
              type="tel"
              name="checkout-form"
              id="phone"
              placeholder="Phone Number*"
              required
            />
          </div>
          <select
            className="checkout-country d-none"
            name="checkout-form"
            id="country"
            required
          >
            {countries &&
              Array.isArray(countries) &&
              [...countries].map((data, index) => {
                return (
                  <option key={index} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
          </select>
          {/* ---------------------
                Country Selection
           ---------------------- */}
          <div
            className={`nice-select checkout-country ${
              openCountry ? "open" : ""
            }`}
            tabIndex="0"
            onClick={() => {
              setOpenCity(false);
              setOpenCountry((e) => !e);
            }}
          >
            <span className="current">{country.name}</span>
            <ul className="list">
              {countries &&
                Array.isArray(countries) &&
                countries.map((data, index) => {
                  return (
                    <li
                      key={index}
                      className={`option ${
                        country.name === data.name ? "selected focus" : ""
                      } `}
                      onClick={() => setCountry(data)}
                    >
                      {data.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <input
            className="input-address"
            type="text"
            name="checkout-form"
            id="address"
            placeholder="Address*"
            required
          />

          <div className="town-zip">
            <select
              className="checkout-city d-none"
              name="checkout-form"
              id="city"
              required
            >
              {cities &&
                Array.isArray(cities) &&
                [...cities].map((data, index) => {
                  return (
                    <option key={index} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
            </select>
            {/* ---------------------
                City Selection
           ---------------------- */}
            <div
              className={`nice-select checkout-city ${
                openCity ? "open" : ""
              }`}
              tabIndex="0"
              onClick={() => {
                setOpenCountry(false);
                setOpenCity((e) => !e);
              }}
            >
              <span className="current">{city.name}</span>
              <ul className="list">
                {cities &&
                  Array.isArray(cities) &&
                  cities.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className={`option ${
                          city.name === data.name ? "selected focus" : ""
                        } `}
                        onClick={() => setCity(data)}
                      >
                        {data.name}
                      </li>
                    );
                  })}
              </ul>
            </div>

            <input
              type="text"
              name="checkout-form"
              id="zip-code"
              placeholder="Postcode / ZIP*"
              required
            />
          </div>
          <div className="checkout-signup">
            <input type="checkbox" name="checkout-form" id="signup" />
            <label for="signup">Create an account?</label>
          </div>
          <h2 className="shipping-address">Shipping Address</h2>
          <div className="checkout-ship-address">
            <input type="checkbox" name="checkout-form" id="ship-address" />
            <label for="ship-address">Ship to a different address</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default BellingDetails;
