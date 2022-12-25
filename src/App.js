import { Stage } from '@inlet/react-pixi';
import LevelOne from './components/levelOne';
import './App.scss';
import { useRef, useState } from 'react';

function App() {
  const gameInputRef = useRef(null);
  const [keyPressed, setKeyPressed] = useState({ value: null });

  return (
    <div className='app' onClick={() => gameInputRef.current.focus()}>
      <input
        className='gameInput'
        autoFocus
        ref={gameInputRef}
        onKeyDown={(e) => setKeyPressed({ value: e.key })}
      ></input>
      <div className='content'>
        <h1 className='heading'>The Game Of Life</h1>
        <Stage width={1000} height={500}>
          <LevelOne keyPressed={keyPressed} />
        </Stage>
      </div>
    </div>
  );
}

export default App;
