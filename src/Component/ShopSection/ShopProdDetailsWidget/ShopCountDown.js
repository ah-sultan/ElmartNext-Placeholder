import useTimer from "@/feature/useTimer/useTimer";

const ShopCountDown = () => {
    const timer = useTimer("28 February 2024 0:00:00 UTC+0")
  return (
    <>
      <div className="single-product-countdown">
        <span>Hurry Up! Offer ends in</span>
        <div className="deal-product-timer" id="timer2">
          <div id="days">
            <span>DAYS</span>
            <br />
            {timer.days}
          </div>
          <div id="hours">
            <span>HRS</span>
            <br />
            {timer.hours}
          </div>
          <div id="minutes">
            <span>MIN</span>
            <br />  {timer.minutes}
          </div>
          <div id="seconds">
            <span>SEC</span>
            <br />{timer.seconds}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCountDown;
