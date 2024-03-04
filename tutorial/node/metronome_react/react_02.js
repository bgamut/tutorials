import React, { useState, useEffect } from 'react';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(60);
  const audio1 = new Audio(process.env.PUBLIC_URL+"/strong_pulse.wav");
  const audio2=new Audio(process.env.PUBLIC_URL+"/weak_pulse.wav");
  const [currentBeat, setCurrentBeat] = useState(1);

  useEffect(() => {
    const interval = (60 / bpm) * 1000;

    const playNextBeat = () => {
      if (currentBeat === 1) {
        audio1.play();
      } else {
        audio2.play();
      }

      setCurrentBeat((prevBeat) => (prevBeat % 4) + 1);
    };

    let timer;
    if (isPlaying) {
      timer = setInterval(playNextBeat, interval);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying, bpm, currentBeat]);

  const toggleSound = () => {
    if (isPlaying) {
      audio1.pause();
      audio2.pause();
    } else {
      audio1.play();
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