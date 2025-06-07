import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Snackbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import { useNavigate } from 'react-router-dom';

function Navbar({ handleDrawerToggle, isMobile, toggleColorMode, mode }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [notifAnchorEl, setNotifAnchorEl] = React.useState(null);
  const notifOpen = Boolean(notifAnchorEl);
  const [devOpen, setDevOpen] = React.useState(false);
  const [pdfAnchorEl, setPdfAnchorEl] = React.useState(null);
  const pdfMenuOpen = Boolean(pdfAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotifClick = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const handlePdfMenuOpen = (event) => setPdfAnchorEl(event.currentTarget);
  const handlePdfMenuClose = () => setPdfAnchorEl(null);
  const handleOpenPdf = (pdfPath) => {
    window.open(pdfPath, '_blank');
    handlePdfMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: 1201,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2 }}
          onClick={() => { handleDrawerToggle(); setDevOpen(true); }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: 1,
            color: 'primary.main',
          }}
        >
          <span style={{ fontWeight: 900, color: 'text.primary', marginRight: 8 }}>Octa</span>Payroll
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Toggle theme">
            <IconButton onClick={toggleColorMode} color="inherit">
              {mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton color="inherit" onClick={handleNotifClick}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={notifAnchorEl}
            open={notifOpen}
            onClose={handleNotifClose}
            PaperProps={{ sx: { minWidth: 250 } }}
          >
            <MenuItem disabled>No notifications</MenuItem>
          </Menu>

          <Tooltip title="Open Reviews">
            <IconButton color="inherit" onClick={handlePdfMenuOpen}>
              <DescriptionIcon />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={pdfAnchorEl}
            open={pdfMenuOpen}
            onClose={handlePdfMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => handleOpenPdf('/pdfs/review1.pdf')}>Review 1</MenuItem>
            <MenuItem onClick={() => handleOpenPdf('/pdfs/review2.pdf')}>Review 2</MenuItem>
            <MenuItem onClick={() => handleOpenPdf('/pdfs/review3.pdf')}>Review 3</MenuItem>
            <MenuItem onClick={() => handleOpenPdf('/pdfs/review4.pdf')}>Review 4</MenuItem>
            <MenuItem onClick={() => handleOpenPdf('/pdfs/review5.pdf')}>Review 5</MenuItem>
          </Menu>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>HR</Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          <MenuItem onClick={() => navigate('/settings')}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>

        <Snackbar
          open={devOpen}
          autoHideDuration={3500}
          onClose={() => setDevOpen(false)}
          message={"Developed with ❤️ by Anwesha Singh & Ayush Pandey  Under the Guidance of  Dr. S. Sadagopan Sir. "}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 