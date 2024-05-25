import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  shelfContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  shelfImage: {
    width: '100%',
    maxWidth: '500px', // Adjust as needed
    marginBottom: theme.spacing(2),
  },
  customTypography: {
    fontSize: '1rem', // Equivalent to body1
    lineHeight: 1.5,
    fontFamily: "Roboto, sans-serif",
    '&.h4': {
      fontSize: '2.125rem', // Equivalent to h4
      fontWeight: 400,
      fontFamily: "Roboto, sans-serif",
    },
  },
}));

export default function MyShelf() {
  const classes = useStyles();

  return (
    <Box className={classes.shelfContainer}>
      <Typography className={`${classes.customTypography} h4`} color="inherit" gutterBottom>My Shelf</Typography>
      <img src='/shelf1.png' alt="Shelf 1" className={classes.shelfImage} />
      <img src='/shelf2.png' alt="Shelf 2" className={classes.shelfImage} />
      <img src='/shelf3.png' alt="Shelf 3" className={classes.shelfImage} />
    </Box>
  );
}