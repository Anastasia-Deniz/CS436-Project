import React from 'react';
import { Typography, Box, Fab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ViewGoalDialog from './ViewGoalDialog';
import CreateGoalDialog from './CreateGoalDialog';
import GoalPaper from './GoalPaper';
import { makeStyles } from '@mui/styles';

const goals = [
    { id: 1, title: 'Test', description: "Don't mind me! I'm just testing out the timer.", duration: 1 },
    { id: 2, title: 'Complete Math Homework', description: 'Finish all exercises from Chapter 4 of Algebra textbook', duration: 45 },
    { id: 3, title: 'Practice Coding', description: 'Solve 5 problems on LeetCode', duration: 60 },
    { id: 4, title: 'Exercise', description: 'Do a 30-minute workout using the fitness app', duration: 25 },
    { id: 5, title: 'Write a Journal', description: 'Write a journal entry about today’s experiences', duration: 20 },

  ];
const useStyles = makeStyles((theme) => ({
    goalsContainer: {
      height: 'calc(100vh - 80px)',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    scrollbar: {
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#555',
      },
    },
    customTypography: {
        fontSize: '1rem', // Equivalent to body1
        lineHeight: 1.5,
        font: "Roboto, sans-serif",
        '&.h4': {
          fontSize: '2.125rem', // Equivalent to h4
          fontWeight: 400,
        },
      },
    }));
  
  export default function MyGoals({ onStart }) {
    const classes = useStyles();
    const [openCreate, setOpenCreate] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [selectedGoal, setSelectedGoal] = React.useState(null);
  
    const handleClickOpenCreate = () => {
      setOpenCreate(true);
    };
  
    const handleCloseCreate = () => {
      setOpenCreate(false);
    };
  
    const handleClickOpenView = (goal) => {
      setSelectedGoal(goal);
      setOpenView(true);
    };
  
    const handleCloseView = () => {
      setOpenView(false);
      setSelectedGoal(null);
    };
  
    const handleDeleteGoal = (goalId) => {
      console.log(`Deleted goal with id: ${goalId}`);
    };
  
    return (
      <Box className={`${classes.goalsContainer} ${classes.scrollbar}`}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography className={`${classes.customTypography} h4`} color="textPrimary"> My Goals </Typography>
          <Fab color="primary" aria-label="add" onClick={handleClickOpenCreate}>
            <AddIcon />
          </Fab>
        </Box>
        <Grid container spacing={2}>
          {goals.map((goal) => (
            <Grid item xs={12} sm={6} md={4} key={goal.id}>
              <GoalPaper 
                title={goal.title} 
                duration={goal.duration} 
                onStart={() => onStart(goal)}
                onClick={() => handleClickOpenView(goal)}
              />
            </Grid>
          ))}
        </Grid>
        <CreateGoalDialog open={openCreate} onClose={handleCloseCreate} />
        <ViewGoalDialog open={openView} goal={selectedGoal} onClose={handleCloseView} onStart={onStart} onDelete={handleDeleteGoal} />
      </Box>
    );
  }