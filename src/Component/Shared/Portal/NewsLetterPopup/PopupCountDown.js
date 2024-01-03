import useTimer from "@/feature/useTimer/useTimer";

const PopupCountDown = () => {
  const timer = useTimer("30 March 2024 0:00:00 UTC+0");

  return (
    <>
      <div className="dwl-content">
        <p>Hurry Up! Offer ends in</p>
        <div className="dwl-timer" id="timer-v2">
          <div id="days">
            <span>Days</span>
            <br />
            {timer.days}
          </div>
          <div id="hours">
            <span>Hours</span>
            <br />
            {timer.hours}
          </div>
          <div id="minutes">
            <span>Min</span>
            <br />
            {timer.minutes}
          </div>
          <div id="seconds">
            <span>Sec</span>
            <br />
            {timer.seconds}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCountDown;
