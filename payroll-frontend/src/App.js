import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Attendance from './pages/Attendance';
import LeaveManagement from './pages/LeaveManagement';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { CustomThemeProvider, useThemeContext } from './components/ThemeContext';
import PayrollCalculator from './pages/PayrollCalculator';
import Login from './pages/Login';
import BonusDeductions from './pages/BonusDeductions';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function LayoutWithSidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const isMobile = useMediaQuery('(max-width:900px)');
  const { mode, toggleColorMode } = useThemeContext();
  const location = useLocation();

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {location.pathname !== '/login' && (
        <Sidebar
          mobileOpen={mobileOpen}
          sidebarOpen={sidebarOpen}
          handleDrawerToggle={handleDrawerToggle}
          isMobile={isMobile}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          transition: 'margin 0.3s, width 0.3s',
        }}
      >
        {location.pathname !== '/login' && (
          <Navbar
            handleDrawerToggle={handleDrawerToggle}
            isMobile={isMobile}
            toggleColorMode={toggleColorMode}
            mode={mode}
          />
        )}
        <Box sx={{ mt: 8 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
            <Route path="/departments" element={<PrivateRoute><Departments /></PrivateRoute>} />
            <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
            <Route path="/leave" element={<PrivateRoute><LeaveManagement /></PrivateRoute>} />
            <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
            <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path="/payroll-calculator" element={<PrivateRoute><PayrollCalculator /></PrivateRoute>} />
            <Route path="/bonus-deductions" element={<PrivateRoute><BonusDeductions /></PrivateRoute>} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

function AppContent() {
  return (
    <Router>
      <LayoutWithSidebar />
    </Router>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
