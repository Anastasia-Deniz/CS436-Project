import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import MyGoals from '../components/MyGoals';
import Timer from '../components/Timer';
import CreateGoalDialog from '../components/CreateGoalDialog';
import MyShelf from '../components/MyShelf';
import { makeStyles } from '@mui/styles';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [currentView, setCurrentView] = useState('goals');
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStart = (goal) => {
    setSelectedGoal(goal);
    setCurrentView('timer');
  };

  return (
    <Container maxWidth={false} disableGutters style={{ height: '100vh', display: 'flex' }}>
      <Box style={{ width: '66.67%', overflow: 'hidden', backgroundColor: '#FFF3E0', padding: '2rem' }}>
        {currentView === 'goals' ? (
          <MyGoals onStart={handleStart} />
        ) : (
          <Timer goal={selectedGoal} />
        )}
        <CreateGoalDialog open={open} onClose={handleClose} />
      </Box>
      <Box style={{ width: '33.33%', backgroundColor: '#6D4C41', color: '#FFF', padding: '2rem', overflowY: 'auto' }}>
        <MyShelf />
      </Box>
    </Container>
  );
}