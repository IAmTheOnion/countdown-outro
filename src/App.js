// App.jsx

import React, { useState } from 'react';
import CountdownTimer from './DateCountdown';
import DataPicker from './DatePicker';
import YouTubePlayer from './YoutubePlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [targetDateTime, setTargetDateTime] = useState(null);
  const [youTubeLink, setYouTubeLink] = useState(null);
  const [momentTime, setMomentTime] = useState(null);
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleDateTimeSelected = (selectedDateTime) => {
    setTargetDateTime(selectedDateTime);
  };

  const handleYouTubeLinkSelected = (link) => {
    setYouTubeLink(link);
  };

  const handleStartCountdown = () => {
    setIsCountdownStarted(true);
  };

  const handleMomentTime = (link) => {
    setMomentTime(link);
  };

  return (
    <div className="container">
      <DataPicker
        onDateTimeSelected={handleDateTimeSelected}
        onYouTubeLinkSelected={handleYouTubeLinkSelected}
        onTimeSelected={handleMomentTime} // Sprawdź, czy to nie jest pusty obiekt
      />


      {targetDateTime && <CountdownTimer 
        targetDateTime={targetDateTime}
        momentTime={momentTime}
        youTubeLink={youTubeLink} 
      />}
    </div>
  );
};

export default App;
