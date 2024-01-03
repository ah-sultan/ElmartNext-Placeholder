import Image from "next/image";

const FeaturesCard = ({ image, imageAlt, title, description }) => {
  return (
    <>
      <div>
        <div className="features-img">
          <Image
            quality={100}
            width={68}
            height={68}
            src={image}
            alt={imageAlt}
            className="img-fluid"
          />
        </div>
        <div className="features-content">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
