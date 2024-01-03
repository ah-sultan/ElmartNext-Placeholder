import Image from "next/image";
import Link from "next/link";

const VendorInfoSidebar = () => {
  return (
    <>
      <div className="lsb-widget-3">
        <div className="vendor-details">
          <div className="vendor-info">
            <div className="image">
              <Image
                quality={100}
                width={80}
                height={80}
                src="/image/seller-dashboard/seller1.png"
                alt="Seller 1"
              />
            </div>
            <div className="title-review">
              <h3>Lady Apparel</h3>
              <div className="product-review">
                <div className="rating-star">
                  {Array(5)
                    .fill()
                    .map((_, index) => {
                      return (
                        <i key={index} className="fa-solid fa-star">
                          &nbsp;
                        </i>
                      );
                    })}
                  <span>&nbsp;(4.8/5.0)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vendor-desc">
            <p>
              Lorem ipsum dolor sit, amet consec tetur adipi sicing elit. At,
              accu samus!
            </p>
          </div>
          <div className="vendor-contact">
            <p>Category: Women Fashion</p>
            <div className="vendor-social">
              <h4>Follow Us:</h4>
              <ul className="social-links">
                {[
                  {
                    id: 0,
                    title: "Our Facebook Page",
                    icon: "fa-brands fa-facebook-f",
                  },
                  {
                    id: 1,
                    title: "Follow on X-Twitter",
                    icon: "fa-brands fa-x-twitter",
                  },
                  {
                    id: 2,
                    title: "Our LinkedIn Page",
                    icon: "fa-brands fa-linkedin-in",
                  },
                  {
                    id: 3,
                    title: "Our YouTube Channel",
                    icon: "fa-brands fa-youtube",
                  },
                ].map((data, index) => {
                  return (
                    <li key={index} className="me-1">
                      <Link href="#" title={data.title}>
                        <i className={data.icon}></i>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorInfoSidebar;
