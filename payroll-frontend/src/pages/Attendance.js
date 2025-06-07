import React from 'react';
import AttendanceCRUD from '../components/AttendanceCRUD';
import { Box, Typography } from '@mui/material';

function Attendance() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#a259ff', mb: 2, fontWeight: 'bold' }}>Attendance</Typography>
      <AttendanceCRUD />
    </Box>
  );
}

export default Attendance; 