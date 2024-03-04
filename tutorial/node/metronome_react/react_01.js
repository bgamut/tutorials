import React, { useState, useEffect } from 'react';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(60);
  const audio = new Audio(process.env.PUBLIC_URL+"/strong_pulse.wav");
  const [currentBeat, setCurrentBeat] = useState(1);

  useEffect(()=>{
    audio.loop=true;
    audio.playbackRate==60/bpm;
  },[bpm])

  const toggleSound = () => {
    if (isPlaying) {
      audio.pause();

    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleBpmChange = (e) => {
    const newBpm = parseInt(e.target.value);
    if (!isNaN(newBpm)) {
      setBpm(newBpm);
    }
  };

  return (
    <div>
      <button onClick={toggleSound}>
        {isPlaying ? 'Stop Sound' : 'Play Sound'}
      </button>
      <input
        type="text"
        value={bpm}
        onChange={handleBpmChange}
        pattern="[0-9]*"
        inputMode="numeric"
      />
    </div>
  );
};

export default App;