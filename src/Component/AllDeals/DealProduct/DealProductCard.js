import useTimer from "@/feature/useTimer/useTimer";
import Image from "next/image";
import Link from "next/link";

const DealProductCard = ({ image, title, endDate, description, discount }) => {
  const timer = useTimer(`${endDate}`);

  return (
    <>
      <div className="deal-product-cat-card">
        <div className="deal-product-left">
          <div className="deal-product-image">
            <Image
              quality={100}
              width={108}
              height={1026}
              src={image}
              alt={title}
            />
            <Link href="#" className="deal-product-btn">
              shop Now
            </Link>
          </div>
        </div>
        <div className="deal-product-right">
          <h5>
            {title} <br />
            <span>{discount}%</span> Off
          </h5>
          <div className="deal-product-timer" id="timer">
            <div id="days">
              <span>DAYS</span> <br />
              {timer.days}
            </div>
            <div id="hours">
              <span>HRS</span> <br />
              {timer.hours}
            </div>
            <div id="minutes">
              <span>MIN</span> <br />
              {timer.minutes}
            </div>
            <div id="seconds">
              <span>SEC</span> <br />
              {timer.seconds}
            </div>
          </div>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

export default DealProductCard;
