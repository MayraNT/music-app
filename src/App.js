import React from 'react';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <TextField id="standard-basic" label="Username *" variant="standard" />
      <TextField id="standard-basic" label="Password *" variant="standard" />
      <Button variant="contained">Login</Button>
    </div>
  );
}

export default App;
