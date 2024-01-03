import Link from "next/link";
import { useState } from "react";

const RegisterForm = ({showRegister}) => {
    const [isVendor, setIsVendor] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div id="registration-form" className={`${showRegister ? "log-reg-form-visible" : "log-reg-form-hidden"}`}>
        <div className="log-reg-form-cont">
          <h2>Register</h2>
          <p className="login-page-text">
            Eneter your information below and create an account.
          </p>
          <form action="#">
            <input
              type="text"
              name="registeration-form-field"
              id="fill-name"
              placeholder="Full Name*"
              required
            />
            <input
              type="email"
              name="registeration-form-field"
              id="registration-email"
              placeholder="Email*"
              required
            />
            <div className="password-field">
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="registeration-form-field"
                id="reg-password"
                placeholder="New Password*"
                required
              />
              <i onClick={() => setShowPassword(e => !e)} id="regp-show-pass" className={`fa-regular ${showPassword ? " fa-eye-slash" : "fa-eye"} `}></i>
            </div>
            <div className={`cutomer-vendor-fields ${isVendor && "show"}`} id="cutomer-vendor-vendor">
              <input
                type="text"
                name="registeration-form-field"
                id="shop-name"
                placeholder="Shop Name*"
                required
              />
              <input
                type="url"
                name="registeration-form-field"
                id="shop-url"
                placeholder="Shop URL*"
                required
              />
              <input
                type="tel"
                name="registeration-form-field"
                id="phone-number"
                placeholder="Phone Number*"
                required
              />
            </div>
            <div className="acc-type">
              <div className="customer" onClick={() => setIsVendor(false)}>
                <input
                  type="radio"
                  name="registeration-form-field"
                  id="customer"
                 defaultValue="customer"
                  defaultChecked={!isVendor}
                  required
                />
                <label htmlFor="customer">I&apos;m a Customer</label>
              </div>
              <div className="vendor" onClick={() => setIsVendor(true)}>
                <input
                  type="radio"
                  name="registeration-form-field"
                  id="vendor"
                  defaultValue="vendor"
                  required
                  defaultChecked={isVendor}
                />
                <label htmlFor="vendor">I&apos;m a Vendor</label>
              </div>
            </div>
            <div className="log-reg-page-btn">
              <input
                className="log-reg-btn"
                type="submit"
                name="login-form-field"
               defaultValue="Register"
              />
            </div>
          </form>
          <p className="form-seperator">Or</p>
          <div className="social-login-register">
            <Link href="#" className="with-google">
              <span>
                <i className="fa-brands fa-google"></i>
              </span>
              <p>Continue with Google</p>
            </Link>
            <Link href="#" className="with-fb">
              <span>
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <p>Continue with Facebook</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
