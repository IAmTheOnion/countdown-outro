// YouTubePlayer.jsx
import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: '0', // Ustaw wysokość na 0, aby odtwarzacz był niewidoczny
    width: '0',  // Ustaw szerokość na 0, aby odtwarzacz był niewidoczny
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={{ display: 'none' }}> {/* Ukryj element */}
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
