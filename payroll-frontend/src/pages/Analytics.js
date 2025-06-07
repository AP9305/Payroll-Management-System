import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const cardStyle = {
  background: 'rgba(255,255,255,0.08)',
  borderRadius: 4,
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.1)',
  color: '#fff',
};

const COLORS = ['#6a11cb', '#2575fc', '#17c1e8', '#fbcf33', '#ea0606', '#a259ff', '#27ae60', '#ff9800'];

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, payload }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {payload.name || payload.type || payload.Department_Name || payload.department || ''} {percent > 0 ? `(${(percent * 100).toFixed(0)}%)` : ''}
    </text>
  );
};

function Analytics() {
  // Hardcoded sample data for demo/trendy charts
  const [attendanceTrend] = useState([
    { date: 'Mon', present: 5 },
    { date: 'Tue', present: 7 },
    { date: 'Wed', present: 6 },
    { date: 'Thu', present: 8 },
    { date: 'Fri', present: 4 },
    { date: 'Sat', present: 3 },
    { date: 'Sun', present: 6 },
  ]);
  const [payrollTrend] = useState([
    { month: 'Jan', total: 714000 },
    { month: 'Feb', total: 765000 },
    { month: 'Mar', total: 877000 },
    { month: 'Apr', total: 982000 },
    { month: 'May', total: 1004000 },
  ]);
  const [leaveStats] = useState([
    { type: 'Sick Leave', value: 8 },
    { type: 'Casual Leave', value: 5 },
    { type: 'Earned Leave', value: 3 },
    { type: 'Other', value: 2 },
  ]);
  const [deptBreakdown] = useState([
    { name: 'Human Resources', value: 70000 },
    { name: 'Finance', value: 90000 },
    { name: 'Engineering', value: 120000 },
    { name: 'Marketing', value: 80000 },
    { name: 'Operations', value: 60000 },
  ]);

  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 900 }}>Analytics</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#6a11cb', fontWeight: 700, mb: 2 }}>Attendance Trend</Typography>
              <Box sx={{ width: 420, height: 360, mx: 'auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attendanceTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Line type="monotone" dataKey="present" stroke="#17c1e8" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#2575fc', fontWeight: 700, mb: 2 }}>Payroll Trend (Last 6 Months)</Typography>
              <Box sx={{ width: 420, height: 360, mx: 'auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={payrollTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#6a11cb" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#17c1e8', fontWeight: 700, mb: 2 }}>Leave Type Stats</Typography>
              <Box sx={{ width: 420, height: 360, mx: 'auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={leaveStats}
                      dataKey="value"
                      nameKey="type"
                      cx="50%"
                      cy="50%"
                      outerRadius={130}
                      labelLine={false}
                      label={renderCustomLabel}
                    >
                      {leaveStats.map((entry, index) => (
                        <Cell key={`cell-leave-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: 20 }} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#fbcf33', fontWeight: 700, mb: 2 }}>Department Payroll Breakdown</Typography>
              <Box sx={{ width: 420, height: 360, mx: 'auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deptBreakdown}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={130}
                      labelLine={false}
                      label={renderCustomLabel}
                    >
                      {deptBreakdown.map((entry, index) => (
                        <Cell key={`cell-dept-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: 20 }} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Analytics; 