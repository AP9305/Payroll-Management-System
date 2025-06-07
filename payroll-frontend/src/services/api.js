import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Profile
export const getProfile = () => api.get('/profile');
export const updateProfile = (data) => api.put('/profile', data);

// Settings
export const getSettings = () => api.get('/settings');
export const updateSettings = (data) => api.put('/settings', data);

// Employees
export const getEmployees = () => api.get('/employees');
export const addEmployee = (data) => api.post('/employees', data);
export const updateEmployee = (id, data) => api.put(`/employees/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

// Departments
export const getDepartments = () => api.get('/departments');
export const addDepartment = (data) => api.post('/departments', data);

// Attendance
export const getAttendance = () => api.get('/attendance');
export const addAttendance = (data) => api.post('/attendance', data);

// Leave Management
export const getLeaves = () => api.get('/leaves');
export const addLeave = (data) => api.post('/leaves', data);

// Reports
export const getPayrollReport = (month, year) => 
  api.get('/reports/payroll', { params: { month, year } });
export const getAttendanceReport = (month, year) => 
  api.get('/reports/attendance', { params: { month, year } });

// New report endpoints
export const fetchAttendanceReport = () => api.get('/attendance-report');
export const fetchLeaveReport = () => api.get('/leave-report');
export const fetchDepartmentSalaryReport = () => api.get('/department-salary-report');
export const fetchBonusDeductionReport = () => api.get('/bonus-deduction-report');

// Analytics
export const getDashboardStats = () => api.get('/analytics/dashboard');
export const getSalaryAnalytics = () => api.get('/analytics/salary');

export default api; 