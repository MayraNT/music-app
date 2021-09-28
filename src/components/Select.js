import * as React from 'react';

import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';

// STILL NEEDS WORK w error in console

export default function SelectQuality() {
  const [quality, setquality] = React.useState('');

  const handleSelect = (event) => {
    setquality(event.target.value);
    console.log(quality);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={quality}
          onChange={handleSelect}
          label="quality"
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}