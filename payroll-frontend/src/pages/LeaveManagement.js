import React from 'react';
import LeaveCRUD from '../components/LeaveCRUD';
import { Box, Typography } from '@mui/material';

function LeaveManagement() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#a259ff', mb: 2, fontWeight: 'bold' }}>Leave Management</Typography>
      <LeaveCRUD />
    </Box>
  );
}

export default LeaveManagement; 