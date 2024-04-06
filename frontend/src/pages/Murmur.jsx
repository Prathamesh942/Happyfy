import React, { useState } from "react";

const Murmur = () => {
  const [sounds, setSounds] = useState([
    { name: "Rain", volume: 50,  file: "/sounds/rain.mp3" },
    { name: "Thunder", volume: 50,  file: "/sounds/thunder.mp3" },
  ]);

  const [allSoundsPlaying, setAllSoundsPlaying] = useState(false);
  let currentAudio = null;

  const playSound = (index) => {
    const newSounds = [...sounds];
    
    stopSound();

    newSounds[index].isPlaying = true;
    setSounds(newSounds);

    const audio = new Audio(newSounds[index].file);
    audio.volume = newSounds[index].volume / 100;
    audio.loop = true;
    audio.play();
    currentAudio = audio;
  };


  const adjustVolume = (index, volume) => {
    const newSounds = [...sounds];
    newSounds[index].volume = volume;
    setSounds(newSounds);
  };

  return (
    <div className="app">
      <h1>Soft Murmur</h1>
      <div className="sound-player">
        <button onClick={toggleAllSounds}>
          {allSoundsPlaying ? "Pause All" : "Play All"}
        </button>
        {sounds.map((sound, index) => (
          <div className="sound-element" key={index}>
            <h2>{sound.name}</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={sound.volume}
              onChange={(e) => adjustVolume(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Murmur;
