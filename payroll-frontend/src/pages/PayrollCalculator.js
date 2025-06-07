import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, MenuItem, Select, Button, Stack, TextField } from '@mui/material';
import axios from 'axios';

function PayrollCalculator() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [payroll, setPayroll] = useState({ salary: 0, bonus: 0, deduction: 0 });
  const [finalAmount, setFinalAmount] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(() => {});
  }, []);

  const fetchPayroll = () => {
    if (!selectedEmployee) return;
    axios.get(`http://localhost:5000/api/payroll-calc/${selectedEmployee}`)
      .then(res => setPayroll(res.data))
      .catch(() => setPayroll({ salary: 0, bonus: 0, deduction: 0 }));
  };

  const handleCalculate = () => {
    setFinalAmount(Number(payroll.salary) + Number(payroll.bonus) - Number(payroll.deduction));
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#a259ff', mb: 3, fontWeight: 900 }}>Payroll Calculator Tool</Typography>
      <Box sx={{ maxWidth: 500, mx: 'auto' }}>
        <Card sx={{ bgcolor: '#23272a', color: '#fff', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#a259ff', mb: 2, fontWeight: 'bold' }}>Payroll Calculator</Typography>
            <Stack spacing={2}>
              <Select
                value={selectedEmployee}
                onChange={e => { setSelectedEmployee(e.target.value); setFinalAmount(null); }}
                displayEmpty
                sx={{
                  bgcolor: '#23272a',
                  color: '#fff',
                  '& .MuiSelect-icon': { color: '#a259ff' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#a259ff' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#a259ff' },
                }}
                inputProps={{
                  sx: {
                    bgcolor: '#23272a',
                    color: '#fff',
                  }
                }}
              >
                <MenuItem value="">Select Employee</MenuItem>
                {employees.map(emp => (
                  <MenuItem key={emp.Employee_ID} value={emp.Employee_ID}>
                    {emp.Employee_Name}
                  </MenuItem>
                ))}
              </Select>
              <Button variant="contained" sx={{ bgcolor: '#a259ff', color: '#fff' }} onClick={fetchPayroll} disabled={!selectedEmployee}>
                Fetch Payroll Data
              </Button>
              <TextField label="Salary" value={payroll.salary} InputProps={{ readOnly: true }} sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }} />
              <TextField label="Bonus" value={payroll.bonus} InputProps={{ readOnly: true }} sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }} />
              <TextField label="Deduction" value={payroll.deduction} InputProps={{ readOnly: true }} sx={{ input: { color: '#fff' }, label: { color: '#a259ff' } }} />
              <Button variant="contained" sx={{ bgcolor: '#27ae60', color: '#fff' }} onClick={handleCalculate} disabled={!selectedEmployee}>
                Calculate Payroll
              </Button>
              {finalAmount !== null && (
                <Typography variant="h6" sx={{ color: '#27ae60', mt: 2 }}>
                  Final Payroll Amount: ₹{finalAmount}
                </Typography>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default PayrollCalculator; 