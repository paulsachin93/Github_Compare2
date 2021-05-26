// author Sachin Paul
import React from 'react';
import logo from './Github logo.jpg';

import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Profile />
    </div>
  );
} 

export default App;
