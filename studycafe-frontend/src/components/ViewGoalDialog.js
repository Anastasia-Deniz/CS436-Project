import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Box, Button, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TitleIcon from '@mui/icons-material/Title';

export default function ViewGoalDialog({ open, goal, onClose, onStart, onDelete }) {
  const handleDelete = () => {
    onDelete(goal.id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <TitleIcon style={{ marginRight: 8 }} />
          Goal Details
        </Box>
      </DialogTitle>
      {goal && (
        <DialogContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h6">{goal.title}</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="body1">{goal.description}</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <AccessTimeIcon color="action" style={{ marginRight: 8 }} />
            <Typography variant="body2">Duration: {goal.duration} minutes</Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<CancelIcon />}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayArrowIcon />}
              onClick={() => onStart(goal)}
            >
              Start
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
}