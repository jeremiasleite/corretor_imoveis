import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Types(props) {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        {props.titulo}
      </Typography>      
    </div>
  );
}
