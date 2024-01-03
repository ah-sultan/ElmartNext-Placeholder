import { Accordion } from "react-bootstrap";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";
import Link from "next/link";

const LoginRegisterSlide = ({ showLoginRegister, setShowLoginRegister }) => {
  return (
    <>
      <div
        className={`login-register-slider ${showLoginRegister ? "show" : ""}`}
      >
        <div className="log-reg-sld-cont">
          <div className="log-reg-sld-heading">
            <div>
              <h2>Hello,</h2>
              <h2>Welcome!</h2>
            </div>
            <button
              type="button"
              className="log-reg-sld-close"
              onClick={() => setShowLoginRegister(false)}
            >
              <i className="fa-regular fa-circle-xmark"></i>
            </button>
          </div>
          <Accordion
            className="border-0"
            id="accordionLoginRegister"
            defaultActiveKey="0"
          >
            <Accordion.Item eventKey="0" className="accordion-item border-0">
              <Accordion.Header as="h2" className="accordion-header">
                Login
              </Accordion.Header>
              <Accordion.Body>
                <LoginBox />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordion-item border-0">
              <Accordion.Header as="h2" className="accordion-header">
                Register
              </Accordion.Header>
              <Accordion.Body>
                <RegisterBox />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="log-reg-sld-divider">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <div className="social-log-reg">
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

export default LoginRegisterSlide;
