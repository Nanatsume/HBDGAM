import React, { useState } from 'react';
import Scene0Matrix from './components/Scene0Matrix';
import Scene2Book from './components/Scene2Book';
import Scene3Heart from './components/Scene3Heart';
import Scene4Proposal from './components/Scene4Proposal';

function App() {
  const [scene, setScene] = useState(0);
  const nextScene = () => setScene(s => s + 1);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative font-sans">
      {scene === 0 && <Scene0Matrix onComplete={nextScene} />}
      {scene === 1 && <Scene2Book onComplete={nextScene} />}
      {scene === 2 && <Scene3Heart onComplete={nextScene} />}
      {scene === 3 && <Scene4Proposal />}
    </div>
  );
}

export default App;
