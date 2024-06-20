import React from 'react';
import './App.css';
import PlayerList from './PlayerList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIFA Players</h1>
      </header>
      <PlayerList/>
    </div>
  );
};

export default App;

