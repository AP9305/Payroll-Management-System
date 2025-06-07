import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stack, Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import axios from 'axios';

const leaveTypeColors = {
  'Sick': 'error',
  'Vacation': 'success',
  'Personal': 'warning',
  'Maternity': 'info',
  'Paternity': 'primary'
};

function LeaveCRUD() {
  const [leaves, setLeaves] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    Employee_ID: '',
    Leave_Type: '',
    Leave_Desc: ''
  });
  const [selectedId, setSelectedId] = useState(null);

  // Fetch leave records
  const fetchLeaves = () => {
    axios.get('http://localhost:5000/api/leaves')
      .then(res => setLeaves(res.data))
      .catch(err => console.error(err));
  };

  // Fetch employees for dropdown
  const fetchEmployees = () => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchLeaves();
    fetchEmployees();
  }, []);

  // Open Add/Edit dialog
  const handleOpen = (record = null) => {
    if (record) {
      setEditMode(true);
      setForm({ ...record });
      setSelectedId(record.Leave_ID);
    } else {
      setEditMode(false);
      setForm({ Employee_ID: '', Leave_Type: '', Leave_Desc: '' });
      setSelectedId(null);
    }
    setOpenDialog(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpenDialog(false);
    setForm({ Employee_ID: '', Leave_Type: '', Leave_Desc: '' });
    setSelectedId(null);
  };

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Edit leave record
  const handleSave = () => {
    if (editMode) {
      axios.put(`http://localhost:5000/api/leaves/${selectedId}`, form)
        .then(() => { fetchLeaves(); handleClose(); })
        .catch(err => alert('Error updating leave record'));
    } else {
      axios.post('http://localhost:5000/api/leaves', form)
        .then(() => { fetchLeaves(); handleClose(); })
        .catch(err => alert('Error adding leave record'));
    }
  };

  // Delete leave record
  const handleDelete = (id) => {
    if (window.confirm('Delete this leave record?')) {
      axios.delete(`http://localhost:5000/api/leaves/${id}`)
        .then(() => fetchLeaves())
        .catch(err => alert('Error deleting leave record'));
    }
  };

  // Get employee name by ID
  const getEmployeeName = (id) => {
    const employee = employees.find(emp => emp.Employee_ID === id);
    return employee ? employee.Employee_Name : 'Unknown Employee';
  };

  return (
    <Card sx={{ mb: 3, bgcolor: '#23272a', color: '#fff', boxShadow: 3, maxWidth: 600, mx: 'auto' }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 22, color: '#a259ff' }}>
            Leave Records
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: '#27ae60', color: '#fff', fontWeight: 'bold', '&:hover': { bgcolor: '#219150' } }}
            onClick={() => handleOpen()}
          >
            Add Leave
          </Button>
        </Stack>
        <List>
          {leaves.map(record => (
            <ListItem key={record.Leave_ID} divider sx={{ py: 2 }}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleOpen(record)} sx={{ color: '#f1c40f' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(record.Leave_ID)} sx={{ color: '#e74c3c', ml: 1 }}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#a259ff' }}>
                  <EventBusyIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<span style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>{getEmployeeName(record.Employee_ID)}</span>}
                secondary={
                  <>
                    <span style={{ color: '#bdbdbd', fontSize: 15 }}>{record.Leave_Desc}</span>
                    <Chip
                      label={record.Leave_Type}
                      color={leaveTypeColors[record.Leave_Type] || 'default'}
                      size="small"
                      sx={{ ml: 1, fontWeight: 'bold' }}
                    />
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Dialog open={openDialog} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ bgcolor: '#23272a', color: '#a259ff' }}>{editMode ? 'Edit Leave Record' : 'Add Leave Record'}</DialogTitle>
        <DialogContent sx={{ bgcolor: '#23272a' }}>
          <TextField
            select
            margin="dense"
            label="Employee"
            name="Employee_ID"
            value={form.Employee_ID}
            onChange={handleChange}
            fullWidth
            required
            SelectProps={{
              native: true
            }}
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          >
            <option value="">Select Employee</option>
            {employees.map(emp => (
              <option key={emp.Employee_ID} value={emp.Employee_ID}>
                {emp.Employee_Name}
              </option>
            ))}
          </TextField>
          <TextField
            select
            margin="dense"
            label="Leave Type"
            name="Leave_Type"
            value={form.Leave_Type}
            onChange={handleChange}
            fullWidth
            required
            SelectProps={{
              native: true
            }}
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          >
            <option value="">Select Leave Type</option>
            {Object.keys(leaveTypeColors).map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="Description"
            name="Leave_Desc"
            value={form.Leave_Desc}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={3}
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

export default LeaveCRUD; 