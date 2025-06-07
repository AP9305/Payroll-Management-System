import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Grid,
  Divider,
  Alert,
  Snackbar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getSettings, updateSettings } from '../services/api';
import { useThemeContext } from '../components/ThemeContext';

function Settings() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useThemeContext();
  const [settings, setSettings] = useState({
    companyName: '',
    address: '',
    gstin: '',
    email: '',
    phone: '',
    notifications: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const response = await getSettings();
      setSettings((prev) => ({
        ...prev,
        ...response.data,
      }));
      setError(null);
    } catch (err) {
      setError('Failed to load settings');
      console.error('Error fetching settings:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setSettings((prev) => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateSettings(settings);
      setSuccess(true);
      fetchSettings(); // Refresh data
    } catch (err) {
      setError('Failed to update settings');
      console.error('Error updating settings:', err);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 900 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 700 }}>
                Preferences
              </Typography>
              <Box sx={{ mb: 3 }}>
                {/* Removed Enable Notifications switch as requested */}
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mb: 3 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={mode === 'dark'}
                      onChange={toggleColorMode}
                      name="darkMode"
                      color="primary"
                    />
                  }
                  label="Dark Mode"
                />
              </Box>
              <Alert severity="info" sx={{ mt: 2 }}>
                Changes to preferences will be applied immediately.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        message="Settings updated successfully"
      />
    </Box>
  );
}

export default Settings; 