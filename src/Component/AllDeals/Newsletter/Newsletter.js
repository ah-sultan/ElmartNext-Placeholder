import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter">
            <div className="row">
              <div className="col-xl-6">
                <div className="newsletter-content">
                  <div className="section-title">
                    <span>Our Newsletter</span>
                    <h2>
                      Get weekly update. Sign up and get up to{" "}
                      <span>20% off</span> your first purchase
                    </h2>
                  </div>
                  <form action="#">
                    <input
                      type="email"
                      name="email-subscribe"
                      id="email-sub"
                      placeholder="Enter your email address"
                    />
                    <button className="button-c" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 newsletter-right-content">
                <div className="newsletter-image">
                  <Image
                   quality={100}
                    width={379}
                    height={362}
                    src="/image/home-one/newsletter/newsletter-2.png"
                    alt="news letter image"
                    className="img fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
