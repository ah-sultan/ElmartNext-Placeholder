import { useState } from "react";
import profileFromData from "./profileFromData.json";

const ProfileEditForm = ({handleEdit}) => {
  const [selectCountry, setSelectCountry] = useState(
    profileFromData.countries && profileFromData.countries[0]
  );
  const [selectCity, setSelectCity] = useState(
    selectCountry.cities && selectCountry.cities[0]
  );
  const [showCountryBox, setShowCountryBox] = useState(false);
  const [showCityBox, setShowCityBox] = useState(false);

  // Handle Edit 
  const handleEditForm = () => {
    handleEdit()
  }

  return (
    <form id="editProfileForm" className="">
      <h2>Edit Profile</h2>
      <div className="edit-profile-form-row" >
        <input
          name="edit-profile-form"
          type="text"
          placeholder="Full Name"
          className="edit-profile-full-width"
          defaultValue="Ronal M. Griffim"
          id="f-name"
          required=""
        />
      </div>
      <div className="edit-profile-form-row" >
        <input
          name="edit-profile-form"
          type="email"
          placeholder="Email Address"
          className="edit-profile-half-width"
          defaultValue="user.example@gmail.com"
          id="email"
          required=""
        />
        <input
          name="edit-profile-form"
          type="tel"
          placeholder="Phone Number"
          className="edit-profile-half-width"
          defaultValue="+441234567890"
          id="tel-num"
          required=""
        />
      </div>
      <div className="edit-profile-form-row" >
        <input
          name="edit-profile-form"
          type="text"
          placeholder="Enter Address 1"
          className="edit-profile-full-width"
          defaultValue="47 Farringdon St, London"
          id="address1"
          required=""
        />
      </div>
      <div className="edit-profile-form-row" >
        <input
          name="edit-profile-form"
          type="text"
          placeholder="Enter Address 2"
          className="edit-profile-full-width"
          id="address2"
        />
      </div>
      <div className="edit-profile-form-row" >
        {/* Country Select  Section*/}
        <select
          className="edit-profile-country"
          name="edit-profile-form"
          id="country"
          required=""
          style={{ display: "none" }}
        >
          {profileFromData.countries &&
            Array.isArray(profileFromData.countries) &&
            [...profileFromData.countries].map((data, index) => {
              return (
                <option key={index} value={data.id}>
                  {data.title}
                </option>
              );
            })}
        </select>
        <div
          className={`nice-select edit-profile-country ${
            showCountryBox ? "open" : ""
          }`}
          onClick={() => {setShowCountryBox((e) => !e), setShowCityBox(false)}}
          tabIndex="0"
          
        >
          <span className="current">{selectCountry.title}</span>
          <ul className="list">
            {profileFromData.countries &&
              Array.isArray(profileFromData.countries) &&
              [...profileFromData.countries].map((country, index) => {
                return (
                  <li
                    key={index}
                    data-value={country.id}
                    className={`option ${selectCountry.title === country.title  ? "selected focus" : ""}`}
                    onClick={() => {
                      setSelectCountry(country),
                      setSelectCity(country.cities[0])
                    }}
                  >
                    {country.title}
                  </li>
                );
              })}
          </ul>
        </div>
        {/* City Select  Section*/}
        <select
          className="edit-profile-city"
          name="edit-profile-form"
          id="city"
          required=""
          style={{ display: "none" }}
        >
          {selectCountry.cities &&
            Array.isArray(selectCountry.cities) &&
            [...selectCountry.cities].map((city, index) => {
              return (
                <option value={`city-${city.id}`} key={index}>
                  {city.title}
                </option>
              );
            })}
        </select>
        <div
          className={`nice-select edit-profile-city ${showCityBox ? "open" : ""}`}
          tabIndex="0"
          
          onClick={() => {
            setShowCityBox((e) => !e),
            setShowCountryBox(false)
          }}
        >
          <span className="current">{selectCity.title}</span>
          <ul className="list">
            {selectCountry.cities &&
              Array.isArray(selectCountry.cities) &&
              [...selectCountry.cities].map((city, index) => {
                return (
                  <li
                    value={`city-${city.id}`}
                    key={index}
                    onClick={() => setSelectCity(city)}
                    className={`option ${selectCity.title === city.title ? "selected focus" : ""}`}
                  >
                    {city.title}
                  </li>
                );
              })}
          </ul>
        </div>
        <input
          name="edit-profile-form"
          type="text"
          placeholder="Post/Zip Code"
          className="edit-profile-third-width"
          defaultValue="EC4A 4LL"
          id="zip-code"
          required=""
        />
      </div>
      <div className="edit-profile-form-btn" >
        <button type="button" className="edit-profile-btn button-b" onClick={() => handleEditForm()}>
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
