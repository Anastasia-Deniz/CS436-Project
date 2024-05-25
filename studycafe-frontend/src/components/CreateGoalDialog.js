import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Box, Button } from '@mui/material';

export default function CreateGoalDialog({ open, onClose }) {
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
        />
        <TextField
          margin="dense"
          label="Goal Description"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          label="Goal Duration (in minutes)"
          type="number"
          fullWidth
          variant="outlined"
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Create
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}