import * as React from 'react';
import { useState } from 'react';

import { Switch } from '@material-ui/core';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function OnlineSwitch() {
  const [isOnline, setIsOnline] = useState(true);

  const handleSwitch = (event) => {
    setIsOnline(!isOnline);
    console.log(isOnline);
  }

  return (
    <div>
      <Switch 
        {...label} 
        checked={!isOnline}
        onChange={handleSwitch}
      />
    </div>
  );
}