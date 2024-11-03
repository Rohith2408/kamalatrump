import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Vote from './components/vote';
import { Route,  BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Responses from './components/responses';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Home/>
            <Vote/>
          </div>} 
        />
        <Route path="/responses" element={<Responses/>} />
      </Routes>
    </Router>
  );
}

export default App;
