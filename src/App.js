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
        <div className="login-form-container">
          <div className="login-form">
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
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth={true} 
              style={{ marginTop: 30 }}
              onClick={() => {
                !loggedIn ? setLoggedIn(true) : setLoggedIn(false)
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
  );
}

export default App;
