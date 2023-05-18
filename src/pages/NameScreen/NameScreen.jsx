import { Box, OutlinedInput, Paper, TextField } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import { NameStyles } from './NameScreen.styles';

function NameScreen() {
  const styles = NameStyles();




  return (
    <Paper
      className={styles.paper}
      data-testid="habbit-certification-content"
    >
      <Box>
        <Typography
          className={styles.heading}
          data-testid="habbit-certification-heading"
        >
          Before we help you build healthy habits, let's start with introductions.
        </Typography>
        <Typography
          className={styles.heading}
          data-testid="habbit-certification-subheading"
        >
          What's your name?
        </Typography>
        
        
        <hr />
      
        
          
       
      </Box>
    </Paper>
  );
}

export default NameScreen;

