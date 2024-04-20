import React from 'react';
import YouTube from 'react-youtube';
import './Video.css'; // Import CSS file for styling

const VideoPlayer = () => {
  // YouTube video options (you can customize these as needed)
  const opts = {
    Height: '300px',
    width: '350px',
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  // YouTube video ID (extracted from the YouTube URL)
  const videoUrl = 'https://www.youtube.com/watch?v=bjfKyIAlsZs&list=RDMME_SbwSe15y0&index=2';
  const urlParams = new URLSearchParams(new URL(videoUrl).search);
  const videoId = urlParams.get('v'); // Extract video ID from URL

  return (
    <div className="video-container">
      <div className="text-container">
        <h2>Video Title</h2>
        <p>
          It seems like you've mentioned "random text" here. Are you looking for assistance with
          generating random text or is there a specific context where you need random text? Let me
          know how I can help!
        </p>
        <p>
          It seems like you've mentioned "random text" here. Are you looking for assistance with
          generating random text or is there a specific context where you need random text? Let me
          know how I can help!
        </p>
      </div>
      <div className="video-player">
        {/* Render YouTube video using react-youtube */}
        {videoId && <YouTube videoId={videoId} opts={opts} className="youtube-video" />}
      </div>
    </div>
  );
};

export default VideoPlayer;
