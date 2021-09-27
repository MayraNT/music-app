import * as React from 'react';
import { Switch } from '@material-ui/core';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function OnlineSwitch(props) {
  const { isOnline, setIsOnline } = props;

  const handleChange = (event) => {
    setIsOnline(!isOnline);
  }

  return (
    <div>
      <Switch 
        {...label} 
        defaultChecked 
        checked={isOnline}
        onChange={handleChange}
      />
    </div>
  );
}