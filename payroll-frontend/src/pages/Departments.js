import React from 'react';
import { Box, Typography } from '@mui/material';
import DepartmentCRUD from '../components/DepartmentCRUD';

const Departments = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 900 }}>Department Management</Typography>
      <DepartmentCRUD />
    </Box>
  );
};

export default Departments; 