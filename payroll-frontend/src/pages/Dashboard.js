import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, List, ListItem, ListItemText, Divider, Snackbar } from '@mui/material';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';

const cardStyle = {
  background: 'rgba(255,255,255,0.08)',
  borderRadius: 4,
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.1)',
  backdropFilter: 'blur(42px)',
  color: '#fff',
};

const COLORS = ['#6a11cb', '#2575fc', '#17c1e8', '#fbcf33', '#ea0606', '#a259ff', '#27ae60'];

const renderDepartmentLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, Department_Name }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20; // Position label outside the pie
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={13}
      fontWeight="bold"
      stroke="#111"
      strokeWidth={0.5}
    >
      {Department_Name || 'Unassigned'}
    </text>
  );
};

function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [birthdays, setBirthdays] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  // Add the same sample payroll trend data as Analytics.js
  const payrollTrendSample = [
    { month: 'Jan', total: 714000 },
    { month: 'Feb', total: 765000 },
    { month: 'Mar', total: 877000 },
    { month: 'Apr', total: 982000 },
    { month: 'May', total: 1004000 },
   
  ];

  useEffect(() => {
    axios.get('http://localhost:5000/api/dashboard-metrics')
      .then(res => setMetrics(res.data))
      .catch(() => {});
    axios.get('http://localhost:5000/api/upcoming-birthdays')
      .then(res => setBirthdays(res.data))
      .catch(() => {});
    axios.get('http://localhost:5000/api/recent-leave-requests')
      .then(res => setLeaveRequests(res.data))
      .catch(() => {});
    if (localStorage.getItem('showWelcome') === 'true') {
      setWelcomeOpen(true);
      localStorage.removeItem('showWelcome');
    }
  }, []);

  if (!metrics) return <Typography>Loading dashboard...</Typography>;

  return (
    <Box>
      <Snackbar
        open={welcomeOpen}
        autoHideDuration={6000}
        onClose={() => setWelcomeOpen(false)}
        message={
          <span>
            Welcome!<br />
            <span style={{ fontSize: 13 }}>
              Developed with ❤️ by Anwesha Singh & Ayush Pandey<br />
              Under the Guidance of Dr. S. Sadagopan Sir.
            </span>
          </span>
        }
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 900 }}>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle}><CardContent><Typography variant="h6" sx={{ color: '#a259ff', fontWeight: 700 }}>Employees</Typography><Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>{metrics.totalEmployees}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle}><CardContent><Typography variant="h6" sx={{ color: '#17c1e8', fontWeight: 700 }}>Departments</Typography><Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>{metrics.totalDepartments}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle}><CardContent><Typography variant="h6" sx={{ color: '#fbcf33', fontWeight: 700 }}>Payroll (This Month)</Typography><Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>₹{metrics.payrollThisMonth || '0.00'}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle}><CardContent><Typography variant="h6" sx={{ color: '#ea0606', fontWeight: 700 }}>Bonuses (This Month)</Typography><Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>₹{metrics.bonusThisMonth || '0.00'}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle}><CardContent><Typography variant="h6" sx={{ color: '#82d616', fontWeight: 700 }}>Deductions (This Month)</Typography><Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>₹{metrics.deductionThisMonth || '0.00'}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle}><CardContent><Typography variant="h6" sx={{ color: '#2575fc', fontWeight: 700 }}>Attendance (This Month)</Typography><Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>{metrics.attendanceThisMonth}</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ ...cardStyle, minHeight: 420, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#a259ff', fontWeight: 700, mb: 2, mt: 0 }}>Department Distribution</Typography>
              <Box sx={{ width: 380, height: 260, mx: 'auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={metrics.departmentDistribution}
                      dataKey="count"
                      nameKey="Department_Name"
                      cx="50%"
                      cy="55%"
                      outerRadius={110}
                      label={renderDepartmentLabel}
                      labelLine={true}
                    >
                      {metrics.departmentDistribution.map((entry, idx) => (
                        <Cell key={entry.Department_Name || `Unassigned-${idx}`} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              {/* Custom Legend Below Chart */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 3 }}>
                {metrics.departmentDistribution.map((entry, idx) => (
                  <Box key={entry.Department_Name || `Unassigned-${idx}`}
                    sx={{ display: 'flex', alignItems: 'center', mx: 1, mb: 1 }}>
                    <span style={{
                      display: 'inline-block',
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      backgroundColor: COLORS[idx % COLORS.length],
                      marginRight: 6,
                    }} />
                    <Typography variant="body2" sx={{ color: COLORS[idx % COLORS.length], fontWeight: 700 }}>
                      {entry.Department_Name || 'Unassigned'}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ ...cardStyle, minHeight: 420, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#27ae60', fontWeight: 700, mb: 2, mt: 0 }}>Payroll Trend (Last 6 Months)</Typography>
              <Box sx={{ width: 380, height: 260, mx: 'auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={payrollTrendSample}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="total" stroke="#a259ff" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ ...cardStyle, minHeight: 420, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#fbcf33', fontWeight: 700, mb: 2, mt: 0 }}>Recent Hires</Typography>
              <List>
                {metrics.recentHires.map(emp => (
                  <ListItem key={emp.Employee_ID}>
                    <ListItemText primary={emp.Employee_Name} secondary={emp.Employee_Address} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ ...cardStyle, minHeight: 420, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#ea0606', fontWeight: 700, mb: 2, mt: 0 }}>Top Earners</Typography>
              <List>
                {metrics.topEarners.map(emp => (
                  <ListItem key={emp.Employee_Name}>
                    <ListItemText primary={emp.Employee_Name} secondary={`₹${emp.Salary_Final_Amount}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ ...cardStyle, minHeight: 420, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#17c1e8', fontWeight: 700, mb: 2, mt: 0 }}>Upcoming Birthdays</Typography>
              <List>
                {birthdays.length === 0 ? (
                  <ListItem><ListItemText primary="No birthdays this month" /></ListItem>
                ) : (
                  birthdays.map(b => (
                    <ListItem key={b.Employee_Name}>
                      <ListItemText
                        primary={b.Employee_Name}
                        secondary={`${b.Employee_Address} | ${new Date(b.Employee_DOB).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`}
                      />
                    </ListItem>
                  ))
                )}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ ...cardStyle, minHeight: 420, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#a259ff', fontWeight: 700, mb: 2, mt: 0 }}>Recent Leave Requests</Typography>
              <List>
                {leaveRequests.length === 0 ? (
                  <ListItem><ListItemText primary="No recent leave requests" /></ListItem>
                ) : (
                  leaveRequests.map(lr => (
                    <ListItem key={lr.Leave_ID}>
                      <ListItemText
                        primary={`${lr.Employee_Name} - ${lr.Leave_Type}`}
                        secondary={lr.Leave_Desc}
                      />
                    </ListItem>
                  ))
                )}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard; 