import Link from "next/link";

const LoginBox = () => {
  return (
    <>
      <div>
        <p className="log-reg-sld-text">
          Please enter your Email address and Password to login to your
          dashboard.
        </p>
        <form className="log-reg-sld-login-form" action="#">
          <input
            type="email"
            name="log-reg-sld-login"
            id="log-sld-email"
            placeholder="Email address*"
            required
          />
          <div className="password-field">
            <input
              type="password"
              name="log-reg-sld-login"
              id="log-sld-password"
              placeholder="Password*"
              required
            />
            <i id="show-pass" className="fa-regular fa-eye"></i>
          </div>
          <div className="log-reg-sld-btn">
            <input
              className="button-b"
              type="submit"
              name="log-reg-sld-login"
             defaultValue="Login"
            />
          </div>
          <Link href="/forgot-password">Forgot your password?</Link>
        </form>
      </div>
    </>
  );
};

export default LoginBox;
