import React, { useState } from 'react';
import './index.css';

const DateTimePicker = ({ onDateTimeSelected, onYouTubeLinkSelected, isCountdownStarted, onTimeSelected }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [youTubeLink, setYouTubeLink] = useState('3_-a9nVZYjk');
  const [momentTime, setMomentTime] = useState({
    minutes: 0,
    seconds: 58
  });
  const [isPickerEnabled, setIsPickerEnabled] = useState(true);

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(new Date(event.target.value));
  };

  const handleYouTubeLinkChange = (event) => {
    setYouTubeLink(event.target.value);
  };

  const handleTimeChange = (event) => {
      const [minutes, seconds] = event.target.value.split(":");
      setMomentTime({
        minutes: parseInt(minutes, 10),
        seconds: parseInt(seconds, 10)
      });
  };

  const handleStartCountdown = () => {
    onDateTimeSelected(selectedDateTime);
    onYouTubeLinkSelected(youTubeLink);
    onTimeSelected(momentTime); // Przekazujesz momentMinAndSec bez zmiany jego wartości
    setIsPickerEnabled(false);
  };

  return (
    <div>
      <div style={{ display: isPickerEnabled ? 'block' : 'none' }}>
        <label>Select Date and Time:</label>
        <input
          type="datetime-local"
          value={selectedDateTime.toISOString().slice(0, -8)}
          onChange={handleDateTimeChange}
        />
        <label>YouTube Link:</label>
        <input
          type="text"
          value={youTubeLink}
          onChange={handleYouTubeLinkChange}
        />
        <label>Moment filmu:</label>
        <input
          type="time"
          value={momentTime ? `${momentTime.minutes.toString().padStart(2, '0')}:${momentTime.seconds.toString().padStart(2, '0')}` : ''}
          onChange={handleTimeChange}
        />
      {isPickerEnabled && <button onClick={handleStartCountdown}>Rozpocznij</button>}
      </div>
    </div>
  );
};

export default DateTimePicker;
