const RegisterBox = () => {
  return (
    <>
      <div>
        <p className="log-reg-sld-text">
          Please register with your email and enjoy the benefits of being a
          member.
        </p>
        <form className="log-reg-sld-login-form" action="#">
          <input
            type="email"
            name="log-reg-sld-register"
            id="reg-sld-email"
            placeholder="Email address*"
            required
          />
          <div className="password-field">
            <input
              type="password"
              name="reg-sld-register"
              id="reg-sld-password"
              placeholder="Password*"
              required
            />
            <i id="reg-show-pass" className="fa-regular fa-eye"></i>
          </div>
          <div className="password-field">
            <input
              type="password"
              name="reg-sld-register"
              id="reg-sld-conf-password"
              placeholder="Confirm Password*"
              required
            />
            <i id="reg-show-conf-pass" className="fa-regular fa-eye"></i>
          </div>

          <div className="log-reg-sld-btn">
            <input
              className="button-b"
              type="submit"
              name="reg-sld-register"
              defaultValue="Register"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterBox;
