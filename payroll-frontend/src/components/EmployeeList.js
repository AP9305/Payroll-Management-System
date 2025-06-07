import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Card sx={{ mb: 3, bgcolor: '#23272a', color: '#fff', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: 22 }}>
          Employees
        </Typography>
        <List>
          {employees.map(emp => (
            <ListItem key={emp.Employee_ID} divider sx={{ py: 2 }}>
              <ListItemText
                primary={<span style={{ fontWeight: 600, fontSize: 18 }}>{emp.Employee_Name}</span>}
                secondary={<span style={{ color: '#bdbdbd', fontSize: 15 }}>{emp.Employee_Address + ' | ' + emp.Employee_Phone}</span>}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default EmployeeList; 