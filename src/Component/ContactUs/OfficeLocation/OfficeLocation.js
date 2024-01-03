import officeLocationData from "./officeLocationData.json";
import OfficeLocationCard from "./OfficeLocationCard";

const OfficeLocation = () => {
  return (
    <>
      <section className="office-location-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <span>Our Locations</span>
                <h2>Come and visit our offices around the world</h2>
              </div>
            </div>
          </div>
          {officeLocationData &&
            Array.isArray(officeLocationData) &&
            [...officeLocationData].map((data, index) => {
              return <OfficeLocationCard key={index} {...data} />;
            })}
        </div>
      </section>
    </>
  );
};

export default OfficeLocation;
