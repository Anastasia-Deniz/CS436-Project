import React from 'react';
import { Paper, Typography, Box, Fab } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { makeStyles } from '@mui/styles';

// Hand-drawn images array
const handDrawnImages = [
  '/handdrawn1.png',
  '/handdrawn2.png',
  '/handdrawn3.png',
  '/handdrawn4.png',
  '/handdrawn5.png',
];

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    padding: '1rem',
    height: '200px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    transform: 'rotate(3deg)',
    '&:hover': {
      transform: 'rotate(0deg)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    fontFamily: '"Permanent Marker", cursive',
    margin: (props) => `${props.marginTop}px ${props.marginRight}px ${props.marginBottom}px ${props.marginLeft}px`,
  },
  pin: {
    position: 'absolute',
    top: '-10px',
    left: '10px',
    width: '20px',
    height: '20px',
    backgroundColor: (props) => props.pinColor,
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  handDrawnImage: {
    position: 'absolute',
    bottom: (props) => `${props.imageBottom}px`,
    right: (props) => `${props.imageRight}px`,
    width: '50px',
    height: '50px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  playButton: {
    position: 'absolute',
    left: '180px',
  },
}));

const GoalPaper = ({ title, duration, onStart, onClick }) => {
  const pinColors = ['#ff6347', '#ffa500', '#ffeb3b', '#8bc34a', '#00bcd4', '#3f51b5'];
  const randomPinColor = pinColors[Math.floor(Math.random() * pinColors.length)];
  const randomHandDrawnImage = handDrawnImages[Math.floor(Math.random() * handDrawnImages.length)];

  const randomMargin = {
    marginTop: Math.floor(Math.random() * 8),
    marginRight: Math.floor(Math.random() * 15),
    marginBottom: Math.floor(Math.random() * 8),
    marginLeft: Math.floor(Math.random() * 15),
  };

  const randomPosition = {
    imageBottom: Math.floor(Math.random() * 100 + 50),
    imageRight: Math.floor(Math.random() * 50),
  };

  const classes = useStyles({ pinColor: randomPinColor, backgroundImage: randomHandDrawnImage, ...randomMargin, ...randomPosition });

  return (
    <Paper className={classes.paper} onClick={onClick}>
      <Box className={classes.pin}></Box>
      <Box className={classes.handDrawnImage} style={{ backgroundImage: `url(${randomHandDrawnImage})` }}></Box>
      <Typography className="permanent-marker" variant="h7" padding={1} noWrap>{title}</Typography>
      <Typography className="permanent-marker" variant="body2" noWrap>Duration: {duration} minutes</Typography>
      <Fab className={classes.playButton} size="small" color="primary" onClick={(e) => { e.stopPropagation(); onStart(); }}>
        <PlayArrowIcon />
      </Fab>
    </Paper>
  );
};

export default GoalPaper;