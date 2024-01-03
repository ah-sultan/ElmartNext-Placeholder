import Image from "next/image";
import Link from "next/link";

const SearchProduct = ({
  image,
  title,
  rating,
  price,
  discountPrice,
  reviews,
}) => {
  const countRating = typeof rating === "number" && rating > 0 ? rating : 0;

  return (
    <>
      <div className="search-product">
        <div className="search-product-img">
          <Link href="/shop-details">
            <Image
              quality={100}
              width={265}
              height={340}
              src={image}
              alt={title}
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="search-content">
          <div className="product-rating">
            <span className="rating-icon">
              {Array(countRating)
                .fill()
                .map((_, index) => {
                  return (
                    <i key={index} className="fa-solid fa-star">
                      {" "}
                    </i>
                  );
                })}
            </span>
            <span className="total-rating">
              <span>{reviews}+</span> Reviews
            </span>
          </div>
          <h6 className="product-title">
            <Link href="/shop-details">{title}</Link>
          </h6>
          <div className="product-price-variant">
            <h4>
              ${price}
              {discountPrice && <span>${discountPrice}</span>}
            </h4>
          </div>
          <div className="product-cart">
            <Link href="/cart">
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
            <Link href="/wishlist">
              <i className="fa-regular fa-heart"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
