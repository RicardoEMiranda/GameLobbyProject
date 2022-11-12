import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className='HeaderStyle'>Game Lobby</h1>

      <div className="appframe">
        <div className="topleft">
          <h2 className="consoleHeader">Player 1</h2>
       
        </div>

        <div className="topright">
          <h2 className="consoleHeader">Player 2</h2>
        </div>

        <div className="bottomleft">
          <h2 className="consoleHeader">Player 3</h2>
        </div>
        
        <div className="bottomright">
          <h2 className="consoleHeader">Player 4</h2>
        </div>

      </div>
    </div>
    
  );
}

export default App;
