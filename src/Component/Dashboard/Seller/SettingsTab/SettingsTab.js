import AccountSettings from "./AccountSettings";
import Privacy from "./Privacy";
import TwoFactorAuth from "./TwoFactorAuth";

const SettingsTab = () => {
  return (
    <>
      <div id="user-dshbrd-security">
        <h2>Security & Settings</h2>
        <TwoFactorAuth />
        <Privacy />
        <AccountSettings />
      </div>
    </>
  );
};

export default SettingsTab;
