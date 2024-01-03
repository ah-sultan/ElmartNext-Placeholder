import FeaturesCard from "./FeaturesCard";
import featuresData from './featuresData.json'

 const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="container">
          <div className="features">
            <div className="row">
              {featuresData && Array.isArray(featuresData) && [...featuresData].map((data, index) => {
                return (
                  <div key={index} className="col-xl-3 col-lg-3 col-md-6 mb-40">
                    <FeaturesCard {...data} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features
