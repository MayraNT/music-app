import * as React from 'react';
import { useState } from 'react';

import { Box } from '@material-ui/core';
import { Slider } from '@material-ui/core';

function valuetext(value) {
  return `${value}`;
}

export default function VolumeSlider() {
  const [volume, setVolume] = useState(20);

  const handleSlider = (event, value) => {
    setVolume(event.target.value)
    console.log(value);
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Volume"
        defaultValue={20}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={handleSlider}
      />
    </Box>
  );
}
