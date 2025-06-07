import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stack
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';

function AttendanceCRUD() {
  const [attendance, setAttendance] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    Employee_ID: '',
    Check_in: '',
    Check_out: ''
  });
  const [selectedId, setSelectedId] = useState(null);

  // Fetch attendance records
  const fetchAttendance = () => {
    axios.get('http://localhost:5000/api/attendance')
      .then(res => setAttendance(res.data))
      .catch(err => console.error(err));
  };

  // Fetch employees for dropdown
  const fetchEmployees = () => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchAttendance();
    fetchEmployees();
  }, []);

  // Open Add/Edit dialog
  const handleOpen = (record = null) => {
    if (record) {
      setEditMode(true);
      setForm({
        ...record,
        Check_in: record.Check_in ? record.Check_in.slice(0, 16) : '',
        Check_out: record.Check_out ? record.Check_out.slice(0, 16) : ''
      });
      setSelectedId(record.Attendance_ID);
    } else {
      setEditMode(false);
      setForm({ Employee_ID: '', Check_in: '', Check_out: '' });
      setSelectedId(null);
    }
    setOpenDialog(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpenDialog(false);
    setForm({ Employee_ID: '', Check_in: '', Check_out: '' });
    setSelectedId(null);
  };

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Edit attendance record
  const handleSave = () => {
    if (editMode) {
      axios.put(`http://localhost:5000/api/attendance/${selectedId}`, form)
        .then(() => { fetchAttendance(); handleClose(); })
        .catch(err => alert('Error updating attendance record'));
    } else {
      axios.post('http://localhost:5000/api/attendance', form)
        .then(() => { fetchAttendance(); handleClose(); })
        .catch(err => alert('Error adding attendance record'));
    }
  };

  // Delete attendance record
  const handleDelete = (id) => {
    if (window.confirm('Delete this attendance record?')) {
      axios.delete(`http://localhost:5000/api/attendance/${id}`)
        .then(() => fetchAttendance())
        .catch(err => alert('Error deleting attendance record'));
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
            Attendance Records
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: '#27ae60', color: '#fff', fontWeight: 'bold', '&:hover': { bgcolor: '#219150' } }}
            onClick={() => handleOpen()}
          >
            Add Record
          </Button>
        </Stack>
        <List>
          {attendance.map(record => (
            <ListItem key={record.Attendance_ID} divider sx={{ py: 2 }}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleOpen(record)} sx={{ color: '#f1c40f' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(record.Attendance_ID)} sx={{ color: '#e74c3c', ml: 1 }}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#a259ff' }}>
                  <AccessTimeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<span style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>{getEmployeeName(record.Employee_ID)}</span>}
                secondary={
                  <span style={{ color: '#bdbdbd', fontSize: 15 }}>
                    Check-in: {record.Check_in ? new Date(record.Check_in).toLocaleString() : 'N/A'} | 
                    Check-out: {record.Check_out ? new Date(record.Check_out).toLocaleString() : 'N/A'}
                  </span>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Dialog open={openDialog} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ bgcolor: '#23272a', color: '#a259ff' }}>{editMode ? 'Edit Attendance Record' : 'Add Attendance Record'}</DialogTitle>
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
            margin="dense"
            label="Check-in"
            name="Check_in"
            type="datetime-local"
            value={form.Check_in}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Check-out"
            name="Check_out"
            type="datetime-local"
            value={form.Check_out}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
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

export default AttendanceCRUD; 