import React from 'react';
import { useState } from 'react';

import NavBar from './NavBar';
import CardBlock from './Card';
import OnlineSwitch from './Switch';

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <div className="dashboard">
      <NavBar />
      <CardBlock
        title="Online Mode"
        component={OnlineSwitch}
        isOnline={isOnline}
        setIsOnline={setIsOnline}
      />
    </div>
  );
}
