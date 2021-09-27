import React from 'react';
import { useState } from 'react';

import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    loggedIn ? <Dashboard /> :
      <div className="App">
        <NavBar />
        <TextField required 
          id="standard-basic" 
          label="Username" 
          variant="standard" 
        />
        <TextField required 
          id="standard-basic" 
          label="Password" 
          variant="standard" 
        />
        <Button variant="contained" 
          onClick={() => {
            !loggedIn ? setLoggedIn(true) : setLoggedIn(false)
          }}
        >
          Login
        </Button>
      </div>
  );
}

export default App;
