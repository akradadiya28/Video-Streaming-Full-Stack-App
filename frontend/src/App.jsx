import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer.jsx'
import { useRef } from 'react'

function App() {
  const playerRef = useRef(null);
  const videoLink = "http://localhost:8000/uploads/courses/bb29393e-4408-4a6b-bf3f-0be20424d91c/index.m3u8"

  const VideoPlayerOption = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  }

  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <VideoPlayer options={VideoPlayerOption} onReady={handlePlayerReady} />
    </>
  )
}

export default App
