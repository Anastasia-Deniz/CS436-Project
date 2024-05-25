import React from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  return (
    <Paper style={{ padding: 16, backgroundColor: '#FFF3E0!important' }}>
      <Typography variant="h6" color="textPrimary">Login</Typography>
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
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 16 }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
}