import Image from "next/image";
import Link from "next/link";

const OfficeLocationCard = ({
  name,
  image,
  email,
  website,
  phone,
  locationLink,
}) => {
  return (
    <>
      <div className="row office-location mx-auto">
        <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-center p-0">
          <h2>{name}</h2>
        </div>
        <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-center p-0">
          <Image
            width={201}
            height={110}
            src={image}
            alt={name}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-center p-0 contact-info-responsive">
          <div className="contact-info">
            <p>
              <i className="fa-solid fa-envelope"></i>
              <span>{email}</span>
            </p>
            <p>
              <i className="fa-solid fa-globe"></i>
              <span>{website}</span>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>
              <span>{phone}</span>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-center p-0 ct-btn-responsive">
          <Link href={locationLink} className="contact-page-btn button-b">
            View Location
          </Link>
        </div>
      </div>
    </>
  );
};

export default OfficeLocationCard;
