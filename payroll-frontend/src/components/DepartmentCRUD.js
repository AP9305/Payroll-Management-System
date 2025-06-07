import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stack, CircularProgress, Alert, Box, Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BusinessIcon from '@mui/icons-material/Business';
import axios from 'axios';

function DepartmentCRUD() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    Department_Name: '',
    Department_Location: ''
  });
  const [selectedId, setSelectedId] = useState(null);

  // Fetch departments
  const fetchDepartments = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching departments...');
      const response = await axios.get('http://localhost:5000/api/departments');
      console.log('Departments data:', response.data);
      setDepartments(response.data);
    } catch (err) {
      console.error('Error fetching departments:', err);
      setError(err.response?.data?.error || 'Failed to fetch departments. Please check if the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('DepartmentCRUD component mounted');
    fetchDepartments();
  }, []);

  // Open Add/Edit dialog
  const handleOpen = (dept = null) => {
    if (dept) {
      setEditMode(true);
      setForm({ ...dept });
      setSelectedId(dept.Department_ID);
    } else {
      setEditMode(false);
      setForm({ Department_Name: '', Department_Location: '' });
      setSelectedId(null);
    }
    setOpenDialog(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpenDialog(false);
    setForm({ Department_Name: '', Department_Location: '' });
    setSelectedId(null);
  };

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Edit department
  const handleSave = async () => {
    try {
      setError(null);
      if (editMode) {
        await axios.put(`http://localhost:5000/api/departments/${selectedId}`, form);
      } else {
        await axios.post('http://localhost:5000/api/departments', form);
      }
      await fetchDepartments();
      handleClose();
    } catch (err) {
      console.error('Error saving department:', err);
      setError(err.response?.data?.error || 'Failed to save department');
    }
  };

  // Delete department
  const handleDelete = async (id) => {
    if (window.confirm('Delete this department?')) {
      try {
        setError(null);
        await axios.delete(`http://localhost:5000/api/departments/${id}`);
        await fetchDepartments();
      } catch (err) {
        console.error('Error deleting department:', err);
        setError(err.response?.data?.error || 'Failed to delete department');
      }
    }
  };

  if (loading) {
    return (
      <Card sx={{ mb: 3, bgcolor: '#23272a', color: '#fff', boxShadow: 3, maxWidth: 600, mx: 'auto', p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <CircularProgress sx={{ color: '#a259ff' }} />
          <Typography>Loading departments...</Typography>
        </Stack>
      </Card>
    );
  }

  return (
    <Card sx={{ mb: 3, bgcolor: '#23272a', color: '#fff', boxShadow: 3, maxWidth: 600, mx: 'auto' }}>
      <CardContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 22, color: '#a259ff' }}>
            Departments
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: '#27ae60', color: '#fff', fontWeight: 'bold', '&:hover': { bgcolor: '#219150' } }}
            onClick={() => handleOpen()}
          >
            Add Department
          </Button>
        </Stack>
        {departments.length === 0 ? (
          <Typography sx={{ textAlign: 'center', color: '#bdbdbd', py: 3 }}>
            No departments found. Add your first department!
          </Typography>
        ) : (
          <List>
            {departments.map(dept => (
              <ListItem key={dept.Department_ID} divider sx={{ py: 2 }}
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleOpen(dept)} sx={{ color: '#f1c40f' }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(dept.Department_ID)} sx={{ color: '#e74c3c', ml: 1 }}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: '#a259ff' }}>
                    <BusinessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" component="span">
                      {dept.Department_Name}
                    </Typography>
                  }
                  secondary={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                      <Typography variant="body2" color="textSecondary" component="span">
                        {dept.Department_Location}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
      <Dialog open={openDialog} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ bgcolor: '#23272a', color: '#a259ff' }}>{editMode ? 'Edit Department' : 'Add Department'}</DialogTitle>
        <DialogContent sx={{ bgcolor: '#23272a' }}>
          <TextField
            margin="dense"
            label="Department Name"
            name="Department_Name"
            value={form.Department_Name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Department Location"
            name="Department_Location"
            value={form.Department_Location}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#23272a' }}>
          <Button onClick={handleClose} sx={{ color: '#fff' }}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{ bgcolor: '#a259ff', color: '#fff', fontWeight: 'bold' }}>{editMode ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default DepartmentCRUD; 