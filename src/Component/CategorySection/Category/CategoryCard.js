import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ image, title, quantity, alt }) => {
  return (
    <>
      <Link href="#" className="cat-card mx-auto">
        <div className="catgory-content">
          <div className="category-image">
            <Image
              src={image}
              alt={alt}
              width={116}
              height={150}
              className="img-fluid"
              quality={100}
            />
          </div>
          <div className="category-title">
            <h5>{title}</h5>
            <span>{quantity}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
