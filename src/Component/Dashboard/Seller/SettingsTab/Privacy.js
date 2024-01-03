
const Privacy = () => {
  return (
    <>
      <div className="security-area">
        <h3>Privacy</h3>
        <div className="switch-settings">
          <div className="title">
            <h4>Make your store public</h4>
            <p>
              Publish or unpublish your store. If unpublished your store will
              not be visible to users.
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
      </div>
    </>
  );
};

export default Privacy;
