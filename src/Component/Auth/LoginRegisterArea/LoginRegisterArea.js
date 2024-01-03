"use client";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const LoginRegisterArea = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  // Handle login visibility
  const handleLoginVisibility = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  // Handle register visibility
  const handleRegisterVisibility = () => {
    
    setShowLogin(false);
    setShowRegister(true);
    
  };
  return (
    <>
      <section className="login-register-page">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 login-register-area">
              <LoginForm showLogin={showLogin} />
              <RegisterForm showRegister={showRegister} />
            </div>
            <div className="col-md-6 login-register-button-area">
              <div className="login-registration-switcher1" style={{display: showLogin ? "none" : "block"}}>
                <div
                  id="content-for-login-btn"
                  className="content-for-log-reg-visible"
                >
                  <h2>Login</h2>
                  <p>
                    Login here by filling you&apos;re username and password or use
                    your favorite social network account to enter to the site.
                    Site login will simplify the purchase process and allows you
                    to manage your personal account.
                  </p>
                </div>
                <button
                  id="login-btn"
                  className="login-register-visible log-reg-btn"
                  onClick={handleLoginVisibility}
                >
                  Login
                </button>
              </div>
              <div className="login-registration-switcher2" style={{display: showRegister ? "none" : "block"}}>
                <div
                  id="content-for-registration-btn"
                  className="content-for-log-reg-visible"
                >
                  <h2>Register</h2>
                  <p>
                    Registering for this site allows you to access your order
                    status and history. Just fill in the fields below, and we&apos;ll
                    get a new account set up for you in no time. We will only
                    ask you for information necessary to make the purchase
                    process faster and easier.
                  </p>
                </div>
                <button
                  id="register-btn"
                  className="login-register-visible log-reg-btn"
                  onClick={handleRegisterVisibility}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginRegisterArea;
