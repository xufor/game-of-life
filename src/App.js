import './App.scss';
import LevelOne from './components/levelOne';

function App() {
  return (
    <div className='app'>
      <div className='content'>
        <h1 className='heading'>The Game Of Life</h1>
        <LevelOne />
      </div>
    </div>
  );
}

export default App;
