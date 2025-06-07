import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchAttendanceReport, fetchLeaveReport, fetchDepartmentSalaryReport, fetchBonusDeductionReport } from '../services/api';

function Reports() {
  const [tab, setTab] = useState(0);
  const [attendance, setAttendance] = useState([]);
  const [leave, setLeave] = useState([]);
  const [deptSalary, setDeptSalary] = useState([]);
  const [bonusDeduction, setBonusDeduction] = useState({ bonuses: [], deductions: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (tab === 0) fetchAttendanceReport().then(r => setAttendance(r.data)).finally(() => setLoading(false));
    if (tab === 1) fetchLeaveReport().then(r => setLeave(r.data)).finally(() => setLoading(false));
    if (tab === 2) fetchDepartmentSalaryReport().then(r => setDeptSalary(r.data)).finally(() => setLoading(false));
    if (tab === 3) fetchBonusDeductionReport().then(r => setBonusDeduction(r.data)).finally(() => setLoading(false));
  }, [tab]);

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#a259ff', mb: 2, fontWeight: 'bold' }}>Reports</Typography>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 3 }}>
        <Tab label="Attendance" />
        <Tab label="Leave" />
        <Tab label="Department Salary" />
        <Tab label="Bonus & Deduction" />
      </Tabs>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>
      ) : (
        <>
          {tab === 0 && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Employee</TableCell>
                    <TableCell>Check In</TableCell>
                    <TableCell>Check Out</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendance.map(row => (
                    <TableRow key={row.Attendance_ID}>
                      <TableCell>{row.Employee_Name}</TableCell>
                      <TableCell>{row.Check_in}</TableCell>
                      <TableCell>{row.Check_out}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {tab === 1 && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Employee</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leave.map(row => (
                    <TableRow key={row.Leave_ID}>
                      <TableCell>{row.Employee_Name}</TableCell>
                      <TableCell>{row.Leave_Type}</TableCell>
                      <TableCell>{row.Leave_Desc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {tab === 2 && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Department</TableCell>
                    <TableCell>Employees</TableCell>
                    <TableCell>Total Salary</TableCell>
                    <TableCell>Average Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {deptSalary.map(row => (
                    <TableRow key={row.Department_Name}>
                      <TableCell>{row.Department_Name}</TableCell>
                      <TableCell>{row.employee_count}</TableCell>
                      <TableCell>{row.total_salary}</TableCell>
                      <TableCell>{Number(row.avg_salary).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {tab === 3 && (
            <Box>
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Bonuses</Typography>
              <TableContainer component={Paper} sx={{ mb: 3 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bonusDeduction.bonuses.map(row => (
                      <TableRow key={row.Bonus_ID}>
                        <TableCell>{row.Employee_Name}</TableCell>
                        <TableCell>{row.Amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Deductions</Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Reason</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bonusDeduction.deductions.map(row => (
                      <TableRow key={row.Deduction_ID}>
                        <TableCell>{row.Employee_Name}</TableCell>
                        <TableCell>{row.Amount}</TableCell>
                        <TableCell>{row.Reason}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default Reports; 