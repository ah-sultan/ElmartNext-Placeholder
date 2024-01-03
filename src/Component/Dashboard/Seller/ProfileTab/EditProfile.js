
const EditProfile = () => {
  return (
    <>
      <div className="seller-profile-popups mfp-hide" id="seller-profile-edit">
        <h2>Change Password</h2>
        <form action="#">
          <div className="form-input">
            <label htmlFor="sname">Store Name*</label>
            <input
              type="text"
              name="seller-prodile-edit"
              id="sname"
             defaultValue="Lady Apparel"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="semail">Store Email*</label>
            <input
              type="text"
              name="seller-prodile-edit"
              id="semail"
             defaultValue="lady.apparel@demo.com"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="scat">Store Category*</label>
            <input
              type="text"
              name="seller-prodile-edit"
              id="scat"
             defaultValue="Women Fashion"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="sloc">Store Location*</label>
            <input
              type="text"
              name="seller-prodile-edit"
              id="sloc"
             defaultValue="Saddlebow Road, King's Lynn, Norfolk, PE34 3AG, United Kingdom"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="slrname">Seller Name*</label>
            <input
              type="text"
              name="seller-prodile-edit"
              id="slrname"
             defaultValue="Lily Daisy"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="slremail">Seller Email*</label>
            <input
              type="text"
              name="seller-prodile-edit"
              id="slremail"
             defaultValue="lily-daisy@example.com"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="slradrs">Seller Address*</label>
            <input
              type="text"
              name="seller-prodile-edit"
              id="slradrs"
             defaultValue="Saddlebow Road, King's Lynn, Norfolk, PE34 3AG, United Kingdom"
              required
            />
          </div>
          <div className="form-row">
            <input
              className="button-b"
              type="submit"
              name="seller-prodile-edit"
             defaultValue="Change password"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
