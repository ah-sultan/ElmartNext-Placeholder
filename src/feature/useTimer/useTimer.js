import { useEffect, useState } from "react";

const useTimer = ( targetDate ) => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const handleTimer = () => {
      let endTime = new Date(`${targetDate}`);
      endTime = Date.parse(endTime) / 1000;
      let now = new Date();
      now = Date.parse(now) / 1000;

      let timeLeft = endTime - now;
      let days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - days * 86400) / 3600);
      let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      let seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      setTimer({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    setInterval(function () {
      handleTimer();
    }, 1000);
  }, [timer.days, timer.hours, timer.minutes, timer.seconds, targetDate]);

  return timer;
};

export default useTimer;
