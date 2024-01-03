import Image from "next/image";
import Link from "next/link";

const Promo = () => {
  return (
    <>
      <section>
        <div className="promo-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-xxl-3 mb-30">
                <div className="promo-1">
                  <Image
                   quality={100}
                    src="/image/home-one/promo-section/promo-img-1.png"
                    alt="Super Sale"
                    width={176}
                    height={155}
                    className="img-fluid"
                  />
                  <div className="promo-title">
                    <h6>Super Sale</h6>
                    <h3>Summer Collection</h3>
                    <Link href="/shop" className="button-c">
                      shop Now
                    </Link>
                  </div>
                  <div className="promo-discount">
                    <p>
                      50%
                      <br />
                      Off
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xxl-6 mb-30">
                <div className="promo-2">
                  <Image
                   quality={100}
                    src="/image/home-one/promo-section/promo-img-2.png"
                    alt="Special Sale Offer"
                    width={189}
                    height={218}
                    className="img-fluid"
                  />
                  <div className="promo-title">
                    <h6>Special Sale Offer</h6>
                    <h3>New Arrival Summer Collection</h3>
                    <Link href="/shop" className="button-c">
                      shop Now
                    </Link>
                  </div>
                  <div className="promo-discount">
                    <p>
                      35%
                      <br />
                      Off
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xxl-3 mb-30">
                <div className="promo-3">
                  <Image
                   quality={100}
                    src="/image/home-one/promo-section/promo-img-3.png"
                    alt="Special Sale Offer"
                    width={176}
                    height={155}
                    className="img-fluid"
                  />
                  <div className="promo-title">
                    <h6>Special Offer</h6>
                    <h3>Winter Collection</h3>
                    <Link href="/shop" className="button-c">
                      shop Now
                    </Link>
                  </div>
                  <div className="promo-discount">
                    <p>
                      40%
                      <br />
                      Off
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
