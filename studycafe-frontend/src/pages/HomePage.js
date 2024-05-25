import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import MyGoals from '../components/MyGoals';
import Timer from '../components/Timer';
import CreateGoalDialog from '../components/CreateGoalDialog';
import MyShelf from '../components/MyShelf';
import { getUserGoals, getUserRewards } from '../api';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [currentView, setCurrentView] = useState('goals');
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goals, setGoals] = useState([]);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchGoalsAndRewards = async () => {
      const userId = sessionStorage.getItem('userId');
      try {
        const userGoals = await getUserGoals(userId);
        setGoals(userGoals);
        const userRewards = await getUserRewards(userId);
        setRewards(userRewards);
      } catch (error) {
        console.error('Error fetching user goals or rewards:', error);
      }
    };

    fetchGoalsAndRewards();
    console.log('/user/get');
  }, []);

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

  const handleGoalAdded = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleGoalDeleted = (goalId) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <Container maxWidth={false} disableGutters style={{ height: '100vh', display: 'flex' }}>
      <Box style={{ width: '66.67%', overflow: 'hidden', backgroundColor: '#FFF3E0', padding: '2rem' }}>
        {currentView === 'goals' ? (
          <MyGoals onStart={handleStart} goals={goals.filter(goal => !goal.is_complete)} onGoalDeleted={handleGoalDeleted} />
        ) : (
          <Timer goal={selectedGoal} />
        )}
        <CreateGoalDialog open={open} onClose={handleClose} onGoalAdded={handleGoalAdded} />
      </Box>
      <Box style={{ width: '33.33%', backgroundColor: '#6D4C41', color: '#FFF', padding: '2rem', overflowY: 'auto' }}>
        <Typography variant="h4">My Shelf</Typography>
        <MyShelf rewards={rewards} />
      </Box>
    </Container>
  );
}