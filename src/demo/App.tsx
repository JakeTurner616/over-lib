// demo/App.tsx
import React from 'react';
import { OverlayMarker } from '../index';
import './App.css';

function App() {
  return (
    <div className="App" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <OverlayMarker
        width="200px"
        height="200px"
        markerColor="red"
        markerThickness={2}
        markerLength="20px"
        perspective={true}
        perspectiveDistance="400px" // Adjust perspective distance as needed
        rotateX="20deg"            // Adjust vertical rotation as needed
        rotateY="10deg"            // Adjust horizontal rotation as needed
      />
    </div>
  );
}

export default App;