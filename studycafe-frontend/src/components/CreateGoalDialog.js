import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Box, Button } from '@mui/material';
import { addGoal } from '../api';

export default function CreateGoalDialog({ open, onClose, onGoalAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  const handleCreate = async () => {
    const userId = sessionStorage.getItem('userId');
    const goal = { title, description, duration: parseInt(duration), user_id: userId };
    try {
      const addedGoal = await addGoal(goal);
      onGoalAdded(addedGoal);
      onClose();
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a Goal!</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Goal Title"
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Goal Description"
          type="text"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Goal Duration (in minutes)"
          type="number"
          fullWidth
          variant="outlined"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}