import Link from "next/link";
import { useState } from "react";

const LoginForm = ({showLogin}) => {
  const [showPass, setShowPass] = useState(false)
  return (
    <>
      <div id="login-form" className={`${showLogin ? "log-reg-form-visible" : "log-reg-form-hidden"}`}>
        <div className="log-reg-form-cont">
          <h2>Login</h2>
          <p className="login-page-text">Enter your Email and Password to login.</p>
          <form action="#">
            <input
              type="email"
              name="login-form-field"
              id="login-email"
              placeholder="Email*"
              required
            />
            <div className="password-field">
              <input
                type={showPass ? "text" : "password"}
                name="login-form-field"
                id="login-password"
                placeholder="Password*"
                required
              />
              <i id="log-show-pass" className={`fa-regular ${showPass ? "fa-eye-slash" : "fa-eye"}`} onClick={() => setShowPass(!showPass)}></i>
            </div>
            <div className="remember-forgot-pass">
              <div className="remember-me">
                <input
                  type="checkbox"
                  name="login-form-field"
                  id="remember-me"
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <Link href="/forgot-password">Forgot your password?</Link>
            </div>
            <div className="log-reg-page-btn">
              <input
                className="log-reg-btn"
                type="submit"
                name="login-form-field"
                defaultValue="Login"
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

export default LoginForm;
