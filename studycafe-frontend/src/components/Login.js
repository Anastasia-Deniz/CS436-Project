import React, { useState } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);
      if (user && user.id) {
        sessionStorage.setItem('userId', user.id);
        console.log('Logged in user ID:', user.id);
        // Verify if the ID is stored
        const storedUserId = sessionStorage.getItem('userId');
        console.log('Stored user ID:', storedUserId);
        //Wait for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (storedUserId) {
          navigate('/home');
        } else {
          console.error('Failed to store user ID in sessionStorage');
        }
      } else {
        console.error('Invalid user data:', user);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Paper style={{ padding: 16, backgroundColor: '#FFF3E0' }}>
      <Typography variant="h6" color="textPrimary">Login</Typography>
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
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 16 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
}