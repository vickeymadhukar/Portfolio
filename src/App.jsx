import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Oneplace from './Oneplace';
import Preloader from './component/Preloader';
import CustomCursor from './component/CustomCursor';
import { useLenis } from './useLenis';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <div>
      <CustomCursor />
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.5s ease 0.2s',
        pointerEvents: loaded ? 'auto' : 'none',
      }}>
        <Navbar />
        <Oneplace />
      </div>
    </div>
  );
};

export default App;