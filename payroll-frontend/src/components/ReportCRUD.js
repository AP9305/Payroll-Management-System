import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stack, Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AssessmentIcon from '@mui/icons-material/Assessment';
import axios from 'axios';

function ReportCRUD() {
  const [reports, setReports] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    Employee_ID: '',
    Salary_ID: '',
    Bonus_ID: '',
    Deduction_ID: '',
    Final_Amount: '',
    Generated_On: ''
  });
  const [selectedId, setSelectedId] = useState(null);

  // Fetch reports
  const fetchReports = () => {
    axios.get('http://localhost:5000/api/reports')
      .then(res => setReports(res.data))
      .catch(err => console.error(err));
  };

  // Fetch employees for dropdown
  const fetchEmployees = () => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchReports();
    fetchEmployees();
  }, []);

  // Open Add/Edit dialog
  const handleOpen = (record = null) => {
    if (record) {
      setEditMode(true);
      setForm({
        ...record,
        Generated_On: record.Generated_On ? record.Generated_On.slice(0, 16) : ''
      });
      setSelectedId(record.Report_ID);
    } else {
      setEditMode(false);
      setForm({
        Employee_ID: '',
        Salary_ID: '',
        Bonus_ID: '',
        Deduction_ID: '',
        Final_Amount: '',
        Generated_On: new Date().toISOString().slice(0, 16)
      });
      setSelectedId(null);
    }
    setOpenDialog(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpenDialog(false);
    setForm({
      Employee_ID: '',
      Salary_ID: '',
      Bonus_ID: '',
      Deduction_ID: '',
      Final_Amount: '',
      Generated_On: ''
    });
    setSelectedId(null);
  };

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Edit report
  const handleSave = () => {
    if (editMode) {
      axios.put(`http://localhost:5000/api/reports/${selectedId}`, form)
        .then(() => { fetchReports(); handleClose(); })
        .catch(err => alert('Error updating report'));
    } else {
      axios.post('http://localhost:5000/api/reports', form)
        .then(() => { fetchReports(); handleClose(); })
        .catch(err => alert('Error adding report'));
    }
  };

  // Delete report
  const handleDelete = (id) => {
    if (window.confirm('Delete this report?')) {
      axios.delete(`http://localhost:5000/api/reports/${id}`)
        .then(() => fetchReports())
        .catch(err => alert('Error deleting report'));
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
            Payroll Reports
          </Typography>
        </Stack>
        <List>
          {reports.map(record => (
            <ListItem key={record.Report_ID} divider sx={{ py: 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#a259ff' }}>
                  <AssessmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<span style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>{getEmployeeName(record.Employee_ID)}</span>}
                secondary={
                  <>
                    <span style={{ color: '#bdbdbd', fontSize: 15 }}>
                      Salary ID: {record.Salary_ID} | Bonus ID: {record.Bonus_ID} | Deduction ID: {record.Deduction_ID}
                    </span>
                    <Chip
                      label={`Final Amount: $${record.Final_Amount}`}
                      color="success"
                      size="small"
                      sx={{ ml: 1, fontWeight: 'bold' }}
                    />
                    <span style={{ color: '#bdbdbd', fontSize: 15, display: 'block', mt: 0.5 }}>
                      Generated: {record.Generated_On ? new Date(record.Generated_On).toLocaleString() : 'N/A'}
                    </span>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Dialog open={openDialog} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ bgcolor: '#23272a', color: '#a259ff' }}>{editMode ? 'Edit Report' : 'Add Report'}</DialogTitle>
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
            label="Salary ID"
            name="Salary_ID"
            value={form.Salary_ID}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Bonus ID"
            name="Bonus_ID"
            value={form.Bonus_ID}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Deduction ID"
            name="Deduction_ID"
            value={form.Deduction_ID}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Final Amount"
            name="Final_Amount"
            type="number"
            value={form.Final_Amount}
            onChange={handleChange}
            fullWidth
            required
            sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }}
          />
          <TextField
            margin="dense"
            label="Generated On"
            name="Generated_On"
            type="datetime-local"
            value={form.Generated_On}
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

export default ReportCRUD; 