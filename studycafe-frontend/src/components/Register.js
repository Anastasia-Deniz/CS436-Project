import React from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';

export default function Register() {
  return (
    <Paper style={{ padding: 16, backgroundColor: '#FFF3E0!important' }}>
      <Typography variant="h6" color="textPrimary">Register</Typography>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          InputLabelProps={{ style: { color: '#3E2723' } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          InputLabelProps={{ style: { color: '#3E2723' } }}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          margin="normal"
          InputLabelProps={{ style: { color: '#3E2723' } }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 16 }}
        >
          Register
        </Button>
      </form>
    </Paper>
  );
}