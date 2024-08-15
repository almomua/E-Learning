import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import {  BarChart as BarChartIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./sidebar.css";
import PersonIcon from '@mui/icons-material/Person';
const drawerWidth = 240;
const collapsedWidth = 60;

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <Drawer
      variant="permanent"
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
      className={isSidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}
      sx={{
        width: isSidebarOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isSidebarOpen ? drawerWidth : collapsedWidth,
          overflowX: 'hidden',
          transition: 'width 0.3s',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button component={Link} to="/Users" key="users">
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/subjects" key="subjects">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary=" Subjects" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
