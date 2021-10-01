import * as React from 'react';

import { Box } from '@material-ui/core';
import { Slider } from '@material-ui/core';

function valuetext(value) {
  return `${value}`;
}

export default function VolumeSlider({ volume, setVolume }) {
  const handleSlider = (event, value) => {
    setVolume(value);
    console.log('volume:', value);
  };

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
