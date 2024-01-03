import Link from "next/link";
import categoryPromoData from "./categoryPromoData.json";
import Image from "next/image";
const CategoryPromo = () => {
  return (
    <section className="category-promo-section">
      <div className="container">
        <div className="row">
          {categoryPromoData &&
            Array.isArray(categoryPromoData) &&
            [...categoryPromoData].map((data, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <div
                    className={`cat-promo-wrapper ${data.backgroundImageClass}`}
                  >
                    <div className="cat-promo-box">
                      <div className="cat-promo-content">
                        <h4>
                          Up to{" "}
                          <span style={{ background: data.discountColor }}>
                            {data.discount}%
                          </span>{" "}
                          Off
                        </h4>
                        <h3>{data.title}</h3>
                        <h2>{data.subtitle}</h2>
                        <Link
                          href={data.buttonLink}
                          className="cat-promo-btn button-a"
                        >
                          Shop Now
                        </Link>
                      </div>
                      <div className={`cat-promo-image${index + 1}`}>
                        <img src={data.image} alt={data.imageAlt} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPromo;
