import React from 'react';
import { Box, Typography } from '@mui/material';
import BonusDeductionCRUD from '../components/BonusDeductionCRUD';

function BonusDeductions() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#a259ff', mb: 2, fontWeight: 'bold' }}>Bonus & Deductions Management</Typography>
      <BonusDeductionCRUD />
    </Box>
  );
}

export default BonusDeductions; 