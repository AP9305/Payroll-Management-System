import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Chip, Stack, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

const departmentColors = {
  'Engineering': 'primary',
  'Finance': 'success',
  'Marketing': 'secondary',
  'Human Resources': 'info',
  'Operations': 'warning',
};

function EmployeeCRUD() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    Employee_ID: '',
    Employee_Name: '',
    Employee_Address: '',
    Employee_Phone: '',
    Employee_DOB: '',
    Department_ID: '',
  });
  const [selectedId, setSelectedId] = useState(null);
  const theme = useTheme();

  // Fetch employees
  const fetchEmployees = () => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  };

  // Fetch departments
  const fetchDepartments = () => {
    axios.get('http://localhost:5000/api/departments')
      .then(res => setDepartments(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
  }, []);

  // Open Add/Edit dialog
  const handleOpen = (emp = null) => {
    if (emp) {
      setEditMode(true);
      setForm({
        Employee_ID: emp.Employee_ID,
        Employee_Name: emp.Employee_Name,
        Employee_Address: emp.Employee_Address,
        Employee_Phone: emp.Employee_Phone,
        Employee_DOB: emp.Employee_DOB ? emp.Employee_DOB.slice(0, 10) : '',
        Department_ID: emp.Department_ID || ''
      });
      setSelectedId(emp.Employee_ID);
    } else {
      setEditMode(false);
      setForm({ Employee_ID: '', Employee_Name: '', Employee_Address: '', Employee_Phone: '', Employee_DOB: '', Department_ID: '' });
      setSelectedId(null);
    }
    setOpenDialog(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpenDialog(false);
    setForm({ Employee_ID: '', Employee_Name: '', Employee_Address: '', Employee_Phone: '', Employee_DOB: '', Department_ID: '' });
    setSelectedId(null);
  };

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Edit employee
  const handleSave = () => {
    const payload = {
      Employee_Name: form.Employee_Name,
      Employee_Address: form.Employee_Address,
      Employee_Phone: form.Employee_Phone,
      Employee_DOB: form.Employee_DOB,
      Department_ID: form.Department_ID || null
    };

    if (editMode) {
      axios.put(`http://localhost:5000/api/employees/${selectedId}`, payload)
        .then(() => { 
          fetchEmployees(); 
          handleClose(); 
        })
        .catch(err => {
          console.error('Error updating employee:', err.response?.data || err.message);
          alert('Error updating employee: ' + (err.response?.data?.error || err.message));
        });
    } else {
      axios.post('http://localhost:5000/api/employees', payload)
        .then(() => { 
          fetchEmployees(); 
          handleClose(); 
        })
        .catch(err => {
          console.error('Error adding employee:', err.response?.data || err.message);
          alert('Error adding employee: ' + (err.response?.data?.error || err.message));
        });
    }
  };

  // Delete employee
  const handleDelete = (id) => {
    if (window.confirm('Delete this employee?')) {
      axios.delete(`http://localhost:5000/api/employees/${id}`)
        .then(() => fetchEmployees())
        .catch(err => alert('Error deleting employee'));
    }
  };

  return (
    <Card sx={{ mb: 3, bgcolor: 'background.paper', color: 'text.primary', boxShadow: 3, maxWidth: 600, mx: 'auto' }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 22, color: '#a259ff' }}>
            Employees
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: '#27ae60', color: '#fff', fontWeight: 'bold', '&:hover': { bgcolor: '#219150' } }}
            onClick={() => handleOpen()}
          >
            Add Employee
          </Button>
        </Stack>
        <List>
          {employees.map(emp => (
            <ListItem key={emp.Employee_ID} divider sx={{ py: 2 }}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleOpen(emp)} sx={{ color: '#f1c40f' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(emp.Employee_ID)} sx={{ color: '#e74c3c', ml: 1 }}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#a259ff' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<span style={{ fontWeight: 600, fontSize: 18, color: theme.palette.text.primary }}>{emp.Employee_Name}</span>}
                secondary={
                  <>
                    <span style={{ color: theme.palette.text.secondary, fontSize: 15 }}>{emp.Employee_Address + ' | ' + emp.Employee_Phone + (emp.Employee_DOB ? ' | DOB: ' + emp.Employee_DOB.slice(0, 10) : '')}</span>
                    {emp.Department_Name && (
                      <Chip
                        label={emp.Department_Name}
                        color={departmentColors[emp.Department_Name] || 'default'}
                        size="small"
                        sx={{ ml: 1, fontWeight: 'bold' }}
                      />
                    )}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Dialog open={openDialog} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ bgcolor: '#23272a', color: '#a259ff' }}>{editMode ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
        <DialogContent sx={{ bgcolor: '#23272a' }}>
          <TextField
            margin="dense"
            label="Name"
            name="Employee_Name"
            value={form.Employee_Name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Address"
            name="Employee_Address"
            value={form.Employee_Address}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Phone"
            name="Employee_Phone"
            value={form.Employee_Phone}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Date of Birth"
            name="Employee_DOB"
            type="date"
            value={form.Employee_DOB}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Department</InputLabel>
            <Select
              value={form.Department_ID || ''}
              onChange={(e) => setForm({ ...form, Department_ID: e.target.value })}
              label="Department"
            >
              <MenuItem value="">None</MenuItem>
              {departments.map((dept) => (
                <MenuItem key={dept.Department_ID} value={dept.Department_ID}>
                  {dept.Department_Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#23272a' }}>
          <Button onClick={handleClose} sx={{ color: '#fff' }}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{ bgcolor: '#a259ff', color: '#fff', fontWeight: 'bold' }}>{editMode ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default EmployeeCRUD; 