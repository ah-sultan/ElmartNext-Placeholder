import AccountSettings from "./AccountSettings";
import LoginSecurity from "./LoginSecurity";
import Privacy from "./Privacy";
import TwoFactorAuth from "./TwoFactorAuth";

const SecurityTab = () => {
  return (
    <>
      <div id="user-dshbrd-security">
        <h2>Security & Settings</h2>
        <LoginSecurity />
        <TwoFactorAuth />
        <Privacy />
        <AccountSettings />
      </div>
    </>
  );
};

export default SecurityTab;
