import React from 'react';
import { Box, Typography } from '@mui/material';
import EmployeeCRUD from '../components/EmployeeCRUD';

const Employees = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 900 }}>Employee Management</Typography>
      <EmployeeCRUD />
    </Box>
  );
};

export default Employees; 