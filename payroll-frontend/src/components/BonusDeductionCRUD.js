import React, { useEffect, useState } from 'react';
import { Box, Typography, Tabs, Tab, Button, Card, CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, CircularProgress, Chip } from '@mui/material';
import { Add, Edit, Delete, MonetizationOn, RemoveCircle } from '@mui/icons-material';
import axios from 'axios';

const API = 'http://localhost:5000/api';

function BonusDeductionCRUD() {
  const [tab, setTab] = useState(0);
  const [bonuses, setBonuses] = useState([]);
  const [deductions, setDeductions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    type: 'bonus', // 'bonus' or 'deduction'
    id: '',
    Employee_ID: '',
    Amount: '',
    Reason: '',
  });
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchAll();
    axios.get(`${API}/employees`).then(res => setEmployees(res.data));
  }, []);

  const fetchAll = () => {
    setLoading(true);
    axios.get(`${API}/bonus-deduction-report`).then(res => {
      setBonuses(res.data.bonuses);
      setDeductions(res.data.deductions);
      setLoading(false);
    });
  };

  const handleOpen = (type, record = null) => {
    setForm(record ? {
      type,
      id: record.Bonus_ID || record.Deduction_ID,
      Employee_ID: record.Employee_ID || '',
      Amount: record.Amount,
      Reason: record.Reason || '',
    } : { type, id: '', Employee_ID: '', Amount: '', Reason: '' });
    setEditMode(!!record);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setForm({ type: 'bonus', id: '', Employee_ID: '', Amount: '', Reason: '' });
    setEditMode(false);
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (form.type === 'bonus') {
      if (editMode) {
        await axios.put(`${API}/bonus/${form.id}`, { Employee_ID: form.Employee_ID, Amount: form.Amount });
      } else {
        await axios.post(`${API}/bonus`, { Employee_ID: form.Employee_ID, Amount: form.Amount });
      }
    } else {
      if (editMode) {
        await axios.put(`${API}/deductions/${form.id}`, { Employee_ID: form.Employee_ID, Amount: form.Amount, Reason: form.Reason });
      } else {
        await axios.post(`${API}/deductions`, { Employee_ID: form.Employee_ID, Amount: form.Amount, Reason: form.Reason });
      }
    }
    handleClose();
    fetchAll();
  };

  const handleDelete = async (type, id) => {
    setLoading(true);
    if (type === 'bonus') {
      await axios.delete(`${API}/bonus/${id}`);
    } else {
      await axios.delete(`${API}/deductions/${id}`);
    }
    fetchAll();
  };

  const getEmployeeName = (id) => {
    const emp = employees.find(e => e.Employee_ID === id);
    return emp ? emp.Employee_Name : 'Unknown';
  };

  return (
    <Box>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="Bonuses" />
        <Tab label="Deductions" />
      </Tabs>
      {loading ? <CircularProgress /> : (
        <Card sx={{ mb: 3, bgcolor: '#23272a', color: '#fff', boxShadow: 3, maxWidth: 600, mx: 'auto' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 22, color: '#a259ff' }}>
                {tab === 0 ? 'Bonuses' : 'Deductions'}
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{ bgcolor: tab === 0 ? '#27ae60' : '#ea0606', color: '#fff', fontWeight: 'bold', '&:hover': { bgcolor: tab === 0 ? '#219150' : '#b30000' } }}
                onClick={() => handleOpen(tab === 0 ? 'bonus' : 'deduction')}
              >
                {tab === 0 ? 'Add Bonus' : 'Add Deduction'}
              </Button>
            </Box>
            {(tab === 0 ? bonuses : deductions).length === 0 ? (
              <Typography sx={{ textAlign: 'center', color: '#bdbdbd', py: 3 }}>
                No {tab === 0 ? 'bonuses' : 'deductions'} found.
              </Typography>
            ) : (
              <List>
                {(tab === 0 ? bonuses : deductions).map((row) => (
                  <ListItem
                    key={row.Bonus_ID || row.Deduction_ID}
                    divider
                    sx={{ py: 2 }}
                    secondaryAction={
                      <>
                        <IconButton edge="end" aria-label="edit" onClick={() => handleOpen(tab === 0 ? 'bonus' : 'deduction', row)} sx={{ color: '#f1c40f' }}>
                          <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(tab === 0 ? 'bonus' : 'deduction', row.Bonus_ID || row.Deduction_ID)} sx={{ color: '#e74c3c', ml: 1 }}>
                          <Delete />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: tab === 0 ? '#27ae60' : '#ea0606' }}>
                        {tab === 0 ? <MonetizationOn /> : <RemoveCircle />}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body1" component="span" sx={{ fontWeight: 600, color: '#fff' }}>
                          {getEmployeeName(row.Employee_ID)}
                        </Typography>
                      }
                      secondary={
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                          <Typography variant="body2" color="textSecondary" component="span" sx={{ color: '#bdbdbd' }}>
                            {tab === 0 ? (
                              <>Bonus: <b>₹{row.Amount}</b></>
                            ) : (
                              <>
                                Deduction: <b>₹{row.Amount}</b> {row.Reason && <Chip label={row.Reason} size="small" sx={{ ml: 1, bgcolor: '#ea0606', color: '#fff' }} />}
                              </>
                            )}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      )}
      <Dialog open={dialogOpen} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>{editMode ? `Edit ${form.type === 'bonus' ? 'Bonus' : 'Deduction'}` : `Add ${form.type === 'bonus' ? 'Bonus' : 'Deduction'}`}</DialogTitle>
        <DialogContent>
          <TextField
            select
            margin="dense"
            label="Employee"
            name="Employee_ID"
            value={form.Employee_ID}
            onChange={handleChange}
            fullWidth
            required
            SelectProps={{ native: true }}
            sx={{ mb: 2 }}
          >
            <option value="">Select Employee</option>
            {employees.map(emp => (
              <option key={emp.Employee_ID} value={emp.Employee_ID}>{emp.Employee_Name}</option>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="Amount"
            name="Amount"
            value={form.Amount}
            onChange={handleChange}
            type="number"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          {form.type === 'deduction' && (
            <TextField
              margin="dense"
              label="Reason"
              name="Reason"
              value={form.Reason}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">{editMode ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default BonusDeductionCRUD; 