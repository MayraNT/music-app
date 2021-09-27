import * as React from 'react';

import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './card.css'

export default function CardBlock(props) {
  const {title, component: Component, isOnline, setIsOnline} = props;
  return (
    <Card className='card-block'>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Component isOnline={isOnline} setIsOnline={setIsOnline}/>
      </CardActions>
    </Card>
  );
}
