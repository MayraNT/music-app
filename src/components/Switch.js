import * as React from 'react';
import { Switch } from '@material-ui/core';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function OnlineSwitch({ isOnline, setIsOnline }) {
  const handleSwitch = () => {
    setIsOnline(!isOnline);
  }

  return (
    <div>
      <Switch 
        {...label} 
        checked={isOnline}
        onChange={handleSwitch}
      />
    </div>
  );
}