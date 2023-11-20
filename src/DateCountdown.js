import React, { useEffect, useState } from 'react';
import YouTubePlayer from './YoutubePlayer'; // Importuj komponent YouTubePlayer
import './index.css';

const CountdownTimer = ({ targetDateTime, momentTime, youTubeLink }) => {
  const calculateTimeLeft = () => {
    const difference = targetDateTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isYouTubePlaying, setIsYouTubePlaying] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      console.log(momentTime.minutes, newTimeLeft.minutes, " : ", momentTime.seconds, newTimeLeft.seconds)
      // Dodaj warunek sprawdzający, czy minuty i sekundy są równe momentMinAndSec
      if (newTimeLeft.minutes <= momentTime.minutes && newTimeLeft.seconds <= momentTime.seconds && newTimeLeft.hours <= 0 && newTimeLeft.days <= 0) {
        setIsYouTubePlaying(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, momentTime]);

  return (
    <div id="timeLeft" className="countdown-container">
        <h2>Pozostało:</h2>
        <div className="countdown-items">
            {timeLeft.days > 0 && <div>{timeLeft.days} dni</div>}
            {timeLeft.hours > 0 && <div>{timeLeft.hours} godzin</div>}
            {timeLeft.minutes > 0 && <div>{timeLeft.minutes} minut</div>}
            {timeLeft.seconds > 0 && <div>{timeLeft.seconds} sekund</div>}
            {!timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds && <div>gratulacje.</div>}
        </div>

        {isYouTubePlaying && youTubeLink && <YouTubePlayer videoId={youTubeLink} />}
    </div>
  );
};

export default CountdownTimer;
