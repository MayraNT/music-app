import * as React from 'react';

import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './card.css'

export default function CardBlock(props) {
  const {
    title, 
    description, 
    component: Component, 
    isOnline, 
    setIsOnline, 
    volume, 
    setVolume,
    quality,
    setQuality
  } = props;

  return (
    <Card className='card-block'>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Component 
          isOnline={isOnline} 
          setIsOnline={setIsOnline} 
          volume={volume} 
          setVolume={setVolume}
          quality={quality}
          setQuality={setQuality}
        />
      </CardActions>
    </Card>
  );
}
