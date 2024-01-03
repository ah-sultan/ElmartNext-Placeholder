
const ChangePassword = () => {
  return (
    <>
      <div className="seller-profile-popups mfp-hide" id="change-seller-pass">
        <h2>Change Password</h2>
        <form action="#">
          <div className="form-input">
            <label htmlFor="new-pass">New Password*</label>
            <input
              type="password"
              name="seller-change-pass"
              id="new-pass"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="new-pass">Confirm Password*</label>
            <input
              type="password"
              name="seller-change-pass"
              id="conf-pass"
              required
            />
          </div>
          <div className="form-row">
            <input
              className="button-b"
              type="submit"
              name="seller-change-pass"
             defaultValue="Change password"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
