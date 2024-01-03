const AddressForm = () => {
  return (
    <>
      <div id="edit-address-popup">
        <h2>Edit Address</h2>
        <form>
          <div className="form-row">
            <div className="form-input">
              <label htmlFor="afname">Full Name*</label>
              <input
                type="text"
                name="address-area"
                id="afname"
               defaultValue="Ronal M. Griffim"
                required=""
              />
            </div>
            <div className="form-input">
              <label htmlFor="astreet">Street*</label>
              <input
                type="text"
                name="address-area"
                id="astreet"
               defaultValue="47 Farringdon St"
                required=""
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-input">
              <label htmlFor="acity">City/Town*</label>
              <input
                type="text"
                name="address-area"
                id="acity"
               defaultValue="Holborn"
                required=""
              />
            </div>
            <div className="form-input">
              <label htmlFor="astate">State/Province/Region*</label>
              <input
                type="text"
                name="address-area"
                id="astate"
               defaultValue="London"
                required=""
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-input">
              <label htmlFor="azip">Zip/Postal Code*</label>
              <input
                type="text"
                name="address-area"
                id="azip"
               defaultValue="EC4A 4LL"
                required=""
              />
            </div>
            <div className="form-input">
              <label htmlFor="acountry">Country*</label>
              <input
                type="text"
                name="address-area"
                id="acountry"
               defaultValue="United Kingdom"
                required=""
              />
            </div>
          </div>
          <input type="submit" name="address-area"defaultValue="Save" />
        </form>
      </div>
    </>
  );
};

export default AddressForm;
