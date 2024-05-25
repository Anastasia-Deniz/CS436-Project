import React, { useState } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';
import { registerUser } from '../api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const user = await registerUser(username, password);
      sessionStorage.setItem('userId', user.id);
      console.log('Registered user ID:', user.id);
      // Redirect to the homepage or perform other actions upon successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Paper style={{ padding: 16, backgroundColor: '#FFF3E0' }}>
      <Typography variant="h6" color="textPrimary">Register</Typography>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputLabelProps={{ style: { color: '#3E2723' } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{ style: { color: '#3E2723' } }}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputLabelProps={{ style: { color: '#3E2723' } }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 16 }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </form>
    </Paper>
  );
}