import React, { useState } from "react";

const Murmur = () => {
  const [sounds, setSounds] = useState([
    { name: 'Rain', volume: 50, isPlaying: false, file: '/sounds/rain2.mp3', audio: null },
    { name: 'Thunder', volume: 50, isPlaying: false, file: '/sounds/thunder.mp3', audio: null },
    { name: 'Coffeeshop', volume: 50, isPlaying: false, file: '/sounds/coffeeshop.mp3', audio: null },
    { name: 'Birds', volume: 50, isPlaying: false, file: '/sounds/birds.mp3', audio: null },
    { name: 'Fire', volume: 50, isPlaying: false, file: '/sounds/fire.mp3', audio: null },
    { name: 'Waves', volume: 50, isPlaying: false, file: '/sounds/waves.mp3', audio: null },
    { name: 'Wind', volume: 50, isPlaying: false, file: '/sounds/wind.mp3', audio: null },
    { name: 'Crickets', volume: 50, isPlaying: false, file: '/sounds/crickets.mp3', audio: null }
  ]);

  const toggleAllSounds = () => {
    const newSounds = [...sounds];
    const isAnySoundPlaying = newSounds.some(sound => sound.isPlaying);

    newSounds.forEach(sound => {
      if (isAnySoundPlaying) {
        sound.audio.pause();
        sound.audio.currentTime = 0;
      } else {
        const audio = new Audio(sound.file);
        audio.volume = sound.volume / 100;
        audio.loop = true;
        audio.play();
        sound.audio = audio;
      }
      sound.isPlaying = !isAnySoundPlaying;
    });

    setSounds(newSounds);
  };

  const adjustVolume = (index, volume) => {
    const newSounds = [...sounds];
    newSounds[index].volume = volume;
    if (newSounds[index].audio) {
      newSounds[index].audio.volume = volume / 100;
    }
    setSounds(newSounds);
  };

  return (
    <div className="app">
      <h1>Soft Murmur</h1>
      <div className="sound-player">
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
        <button onClick={toggleAllSounds}>
          {sounds.some(sound => sound.isPlaying) ? 'Stop All' : 'Play All'}
        </button>
      </div>
    </div>
  );
};

export default Murmur;
