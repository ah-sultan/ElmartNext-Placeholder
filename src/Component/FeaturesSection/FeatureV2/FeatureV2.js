import Image from "next/image";
import featureV2CardData from "./featureV2CardData.json";

const FeatureV2 = () => {
  return (
    <>
      <section className="features-section-v2">
        <div className="container p-0">
          <div className="features-wrapper">
            <div className="container p-0">
              <div className="row">
                {featureV2CardData &&
                  Array.isArray(featureV2CardData) &&
                  [...featureV2CardData].map((data, index) => {
                    return (
                      <div key={index} className="col-sm-4 feat-wrap-col">
                        <div className="features-sec-img">
                          <Image
                            quality={100}
                            src={data.icon}
                            alt={data.title}
                            width={50}
                            height={53}
                            className="img-fluid"
                          />
                        </div>
                        <div className="features-sec-cont">
                          <h3>{data.title}</h3>
                          <span>{data.text}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureV2;
