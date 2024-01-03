
const TwoFactorAuth = () => {
  return (
    <div className="security-area">
      <h3>Security</h3>
      <div className="switch-settings">
        <div className="title">
          <h4>Two-factor Authentication</h4>
          <p>Enable 2FA to strengthen your account security.</p>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="2fa-enabler"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
