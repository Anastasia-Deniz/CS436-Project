import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { completeGoal } from '../api';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  goalTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  goalDescription: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  timer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  button: {
    minWidth: '100px',
  },
}));

export default function Timer({ goal }) {
  const classes = useStyles();
  const [isRunning, setIsRunning] = useState(true);
  const [time, setTime] = useState(goal.duration * 60);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setOpen(true);
      setIsRunning(false);
      completeGoal(goal.id); // Mark the goal as complete and reward the user
    }
    return () => clearInterval(timer);
  }, [isRunning, time, goal.id]);

  const handleStopResume = () => {
    setIsRunning(!isRunning);
  };

  const handleCancel = () => {
    setIsRunning(false);
    setTime(goal.duration * 60);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.title}>Timer</Typography>
      <Typography variant="h5" className={classes.goalTitle}>
        {goal.title}
      </Typography>
      <Typography variant="body1" className={classes.goalDescription}>
        {goal.description}
      </Typography>
      <Typography variant="body2">
        Duration: {goal.duration} minutes
      </Typography>
      <Box className={classes.timer}>
        {formatTime(time)}
      </Box>
      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          color={isRunning ? 'secondary' : 'primary'}
          onClick={handleStopResume}
          className={classes.button}
        >
          {isRunning ? 'Stop' : 'Resume'}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancel}
          className={classes.button}
        >
          Cancel
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <Typography>You've completed your goal: {goal.title}</Typography>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}