import Image from "next/image";

const ForgotPassword = () => {
  return (
    <>
      <section className="forgot-password-page">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="container">
          <div className="row forgot-pass-cont-wrap">
            <div className="col-lg-8 col-md-6">
              <div className="forgot-password-img">
                <div className="image-wrapper">
                  <Image
                   quality={100}
                    src="/image/login-registration-page/forgot_password.png"
                    alt="Forgot Password"
                    width={1191}
                    height={792}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 forgot-password-area">
              <div className="forgot-pass-cont">
                <h2>Forgot Password?</h2>
                <p>Enter your account email address.</p>
                <form id="forgotPasswordForm" action="#">
                  <input
                    type="email"
                    name="forgot-pass-field"
                    id="acc-email"
                    placeholder="Enter Email Address"
                    required
                  />
                  <div className="log-reg-page-btn">
                    <input
                      className="log-reg-btn"
                      type="submit"
                      name="login-form-field"
                     defaultValue="Next"
                    />
                  </div>
                </form>
                <span className="success-message">
                  Reset link sent to your email!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
