import React, { useState } from 'react';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(process.env.PUBLIC_URL+"/strong_pulse.wav");
  
  

  const toggleSound = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.loop=true;
      audio.play()
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={toggleSound}>
        {isPlaying ? 'Stop Sound' : 'Play Sound'}
      </button>
    </div>
  );
};

export default App;