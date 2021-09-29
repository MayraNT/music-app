import React from 'react';
import { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import NavBar from './NavBar';
import CardBlock from './Card';
import OnlineSwitch from './Switch';
import VolumeSlider from './Slider';
import SelectQuality from './Select';

import '../App.css'

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState('Normal');
  const [notifications, setNotifications] = useState([]);

  // If the online status is "false" add the message Your application is offline. You won't be able to share or stream music to other devices.
  // If the volume exceeds 80, add the message Listening to music at a high volume could cause long-term hearing loss.
  // If the sound quality is changed to low, add the message Music quality is degraded. Increase quality if your connection allows it.
  
  

  // useEffect(() => {
  //   const offlineNotification = "Your application is offline. You won't be able to share or stream music to other devices.";
  //   // const highVolumeNotification = "Listening to music at a high volume could cause long-term hearing loss.";
  //   // const lowQualityNotification = "Music quality is degraded. Increase quality if your connection allows it.";

  //   if (isOnline === false) {
  //     setNotifications({ notifications: offlineNotification});
  //   } else {
  //     setNotifications({ notifications: notifications });
  //   }

  // }, [isOnline, notifications]);

  return (
    <div className="dashboard">
      <NavBar />
      <div className="main-container">
        <h1 className="welcome">Welcome User!</h1>
        <section className="cards-container">
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
        </section>
        <h2>System Notifications:</h2>
        <ol>
          {notifications.length && notifications.map((notification, index) => {
            return <li key={index}>{notification}</li>
          })}
        </ol>
      </div>
    </div>
  );
}
