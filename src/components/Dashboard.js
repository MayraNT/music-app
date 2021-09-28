import React from 'react';
// import { useState } from 'react';

import { Typography } from '@material-ui/core';

import NavBar from './NavBar';
import CardBlock from './Card';
import OnlineSwitch from './Switch';
import VolumeSlider from './Slider';
import SelectQuality from './Select';

export default function Dashboard() {

  return (
    <div className="dashboard">
      <NavBar />
      <Typography variant="h5">
          Welcome User!
      </Typography>
      <CardBlock
        title="Online Mode"
        description="Is this application connected to the internet?"
        component={OnlineSwitch}
      />
      <CardBlock
        title="Master Volume"
        description="Overrides all other sound settings in this application"
        component={VolumeSlider}
      />
      <CardBlock
        title="Sound Quality"
        description="Manually control the music quality in event of poor connection"
        component={SelectQuality}
      />
      <Typography variant="h5">
          System Notifications:
      </Typography>
    </div>
  );
}
