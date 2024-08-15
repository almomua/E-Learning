import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const UserNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E Learning
        </Typography>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            size="small"
          />
        </Box>

        {/* Centered Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 2 }}>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/grades">
            Grades
          </Button>
          <Button color="inherit" component={Link} to="/courses">
            Courses
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Box>

        {/* Profile Dropdown */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
