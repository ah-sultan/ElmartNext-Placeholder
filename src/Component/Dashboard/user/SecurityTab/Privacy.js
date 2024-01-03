
const Privacy = () => {
  return (
    <>
      <div className="security-area">
        <h3>Privacy</h3>
        <div className="switch-settings">
          <div className="title">
            <h4>Do you want others to find your profile?</h4>
            <p>
              Makes your profile public, everyone can see your profile if
              enabled.
            </p>
          </div>
          <div className="form-check form-switch">
            <input
              name="privacy"
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="2fa-enabler"
            />
          </div>
        </div>
        <div className="switch-settings">
          <div className="title">
            <h4>People with link can see you</h4>
            <p>Only people with your profile link can see you if enabled.</p>
          </div>
          <div className="form-check form-switch">
            <input
              name="privacy"
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="2fa-enabler"
              defaultChecked
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
