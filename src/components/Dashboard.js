import React from 'react';
import { useState } from 'react';

import { Typography } from '@material-ui/core';

import NavBar from './NavBar';
import CardBlock from './Card';
import OnlineSwitch from './Switch';
import VolumeSlider from './Slider';
import SelectQuality from './Select';

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState('Normal');

  // const [notifications, setNotifications] = useState([]);

  // componentDidUpdate(prevProps) {
  //   if (props.userID !== prevProps.userID) {
  //     setNotifications(props.userID);
  //   }
  // }

  return (
    <div className="dashboard">
      <NavBar />
      <Typography variant="h5">Welcome User!</Typography>
      <CardBlock
        title="Online Mode"
        description="Is this application connected to the internet?"
        component={OnlineSwitch}
        isOnline={isOnline}
        setIsOnline={setIsOnline}
      />
      <CardBlock
        title="Master Volume"
        description="Overrides all other sound settings in this application"
        component={VolumeSlider}
        volume={volume}
        setVolume={setVolume}
      />
      <CardBlock
        title="Sound Quality"
        description="Manually control the music quality in event of poor connection"
        component={SelectQuality}
        quality={quality}
        setQuality={setQuality}
      />
      <Typography variant="h5">
        System Notifications:
        {/* <ol>
            <li>
              if (!isOnline) {
                setNotifications("Your application is offline. You won't be able to share or stream music to other devices.")
              }
            </li>
            </ol> */}
      </Typography>
    </div>
  );
}
