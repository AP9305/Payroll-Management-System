import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.data) {
        localStorage.setItem('isAuthenticated', 'true');
        // Depending on what your backend returns, you might store user details
        localStorage.setItem('user', JSON.stringify(response.data)); // Assuming backend returns user object
        localStorage.setItem('showWelcome', 'true');
        navigate('/dashboard');
      } else {
        // This case might be less likely with a standard backend success response
        setError('Login failed. Please try again.');
      }

    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError(err.response?.data?.error || 'Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      overflow: 'hidden',
      zIndex: 1300
    }}>
      <Card sx={{ minWidth: 350, bgcolor: '#23272a', color: '#fff', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ color: '#a259ff', mb: 2, fontWeight: 'bold' }}>Login to Octa Payroll</Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
              sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#a259ff' } }}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
              sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#a259ff' } }}
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: '#a259ff', color: '#fff', fontWeight: 'bold', width: '100%' }}>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login; 