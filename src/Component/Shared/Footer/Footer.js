import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-about-brand">
                    <div className="footer-logo">
                      <Image
                        quality={100}
                        width={184}
                        height={45}
                        src="/image/logo/logo.png"
                        alt="Logo"
                      />
                    </div>
                    <p>
                      Etoshi is an exciting contemporary brand which focuses on
                      high-quality products graphics with a British style
                    </p>
                    <div className="email">
                      <i className="fa-solid fa-envelope"></i>{" "}
                      <span>
                        <Link href="#">info@mydomain.com</Link>
                      </span>
                    </div>
                    <div className="phone">
                      <i className="fa-solid fa-phone"></i>{" "}
                      <span>
                        <Link href="#">+777 2345 7885</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h2>Customer Services</h2>
                  <ul className="footer-link">
                    {[
                      { id: 0, title: "Collections & Delivery", url: "/" },
                      { id: 1, title: "Returns & Refunds", url: "/" },
                      { id: 2, title: "Terms & Conditions", url: "/" },
                      { id: 3, title: "Delivery Return", url: "/" },
                      { id: 4, title: "Store Locations", url: "/" },
                    ].map((data) => {
                      return (
                        <li key={data.id}>
                          <Link href={data.url}>{data.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h2>Quick Link</h2>
                  <ul className="footer-link">
                    {[
                      { id: 0, title: "Privacy Policy", url: "/" },
                      { id: 1, title: "Terms Of Use", url: "/" },
                      { id: 2, title: "FAQ", url: "/" },
                      { id: 3, title: "Contact", url: "/" },
                      { id: 4, title: "Login / Register", url: "/" },
                    ].map((data) => {
                      return (
                        <li key={data.id}>
                          <Link href={data.url}>{data.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h2>Download App</h2>
                  <p>Save $3 With App & New User only</p>
                  <div className="download-app">
                    <Link href="#">
                      <Image
                        quality={100}
                        width={152}
                        height={45}
                        src="/image/home-one/footer/google-play.png"
                        alt="Google Play Store"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        quality={100}
                        width={152}
                        height={45}
                        src="/image/home-one/footer/app-store.png"
                        alt="Apple App Store"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <ul className="social-links">
                  <li>
                    <Link href="#" title="Our Facebook Page">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>{" "}
                  <li>
                    <Link href="#" title="Follow on X-Twitter">
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                  </li>{" "}
                  <li>
                    <Link href="#" title="Our LinkedIn Page">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>{" "}
                  <li>
                    <Link href="#" title="Our YouTube Channel">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="copyright">
                  <span>
                    © 2023. All rights reserved by{" "}
                    <Link href="/index">Elmart</Link>
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="payment-options">
                  {[
                    {
                      id: 0,
                      image: "/image/home-one/footer/paypal.png",
                      alt: "PayPal",
                    },
                    {
                      id: 1,
                      image: "/image/home-one/footer/visa.png",
                      alt: "Visa",
                    },
                    {
                      id: 2,
                      image: "/image/home-one/footer/mastercard.png",
                      alt: "Mastercard",
                    },
                    {
                      id: 3,
                      image: "/image/home-one/footer/JCB.png",
                      alt: "JCB",
                    },
                    {
                      id: 4,
                      image: "/image/home-one/footer/discover.png",
                      alt: "Discover",
                    },
                  ].map((data, index) => {
                    return (
                      <Image
                        quality={100}
                        key={index}
                        width={50}
                        height={26}
                        src={data.image}
                        alt={data.alt}
                        className="inline-block ms-1 img-fluid"
                        style={{ width: "50px" }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
