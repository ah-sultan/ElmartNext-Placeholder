import Image from "next/image";
import Link from "next/link";

const OrderTabsCard = ({
  orderNumber,
  orderStatus,
  description,
  title,
  image,
  color,
  price,
  discountPrice,
  rating,
  quantity,
  size
}) => {
  // Product original date validation
  const countRating =
    rating && typeof rating?.rate === "number" && rating.rate > 0
      ? rating?.rate
      : 0;
  const currentPrice = discountPrice ? discountPrice : price;
  return (
    <>
      <div className="item-ordered">
        <div className="order-status">
          <div className="icon">
            <i className="fa-solid fa-dolly"></i>
          </div>
          <div className="content">
            <h2>
              Order #{orderNumber}{" "}
              {orderStatus === "canceled" && (
                <span className="status-text" style={{ background: "#858585" }}>
                  Canceled
                </span>
              )}
              {orderStatus === "pending" && (
                <span className="status-text" style={{ background: "#FF0000" }}>
                  Pending
                </span>
              )}
              {orderStatus === "delivered" && (
                <span className="status-text" style={{ background: "#00A01A" }}>
                  Delivered
                </span>
              )}
            </h2>
            {orderStatus === "canceled" && <p>Your order has been canceled.</p>}
            {orderStatus === "pending" && (
              <p>
                We&apos;re processing your order, it will be delivered to you
                soon!
              </p>
            )}
            {orderStatus === "delivered" && (
              <p>Your order has been successfully delivered to you.</p>
            )}
          </div>
        </div>
        <div className="ordered-product">
          <div className="image">
            <Link href="/shop-details">
              <Image width={280} height={340} src={image} alt={title} />
            </Link>
          </div>
          <div className="content">
            <h2>
              <Link href="shop-details.">{title}</Link>
            </h2>
            <p className="order-prod-desc">{description}</p>
            <div className="product-info">
              <p>
                <strong>Price:</strong> ${currentPrice}
              </p>
              <div className="rating">
                <p>
                  <strong>Rating:</strong>&nbsp;
                </p>
                <div className="rating-star">
                  {Array(countRating)
                    .fill()
                    .map((_, index) => {
                      return (
                        <i key={index} className="fa-solid fa-star">
                          {" "}
                        </i>
                      );
                    })}
                  <span>&nbsp;({rating?.reviews})</span>
                </div>
              </div>
              <p>
                <strong>Size:</strong> {size}
              </p>
              <p>
                <strong>Quantity:</strong> x{quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTabsCard;
