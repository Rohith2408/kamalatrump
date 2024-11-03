import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Vote from './components/vote';

function App() {
  return (
    <div className="App">
      <Home/>
      <Vote/>
    </div>
  );
}

export default App;
