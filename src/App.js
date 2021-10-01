import React from 'react';
import { useState } from 'react';

import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Login from './components/Login'

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = (evt) => {
    evt.preventDefault();
    setLoggedIn(!loggedIn);
  }

  return (
    loggedIn ? <Dashboard /> :
      <div className="App">
        <NavBar />
        <Login handleClick={handleClick}/>
      </div>
  );
}

export default App;
