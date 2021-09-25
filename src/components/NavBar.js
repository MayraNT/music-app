import React from 'react';

import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default function NavBar() {
 return (
  <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
       My Music App
      </Typography>
    </Toolbar>
   </AppBar>
  </Box>
 )
}