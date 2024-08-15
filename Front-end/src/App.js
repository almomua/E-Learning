import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, AppBar, Typography } from '@mui/material';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Subjects from './components/subjects/subjects';
import Users from './components/Users/users';
import UserNavbar from './components/navbar/navbar';
import Footer from './components/footer/footer.jsx';
import Item from './components/item/item.jsx';
import CoursePage from './pages/coursepage/CoursesPage.jsx';
const drawerWidth = 240;
const collapsedWidth = 60;


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (

       <Router>
         <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
         <UserNavbar />

   
         <Box sx={{ flex: 1, paddingBottom: '2rem' }}>
           <CoursePage />
          </Box>
               <Footer />
          </Box>
           {/* <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            E-learning /Admin dash board 
          
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: isSidebarOpen ? `${drawerWidth}px` : `${collapsedWidth}px`,
          transition: 'margin-left 0.3s',
        }}
      >
        <Toolbar />
        <Routes>
        
        <Route path="/subjects" element={<Subjects/>} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </Box>
    </Box> */}
     </Router>
     
  );
};

export default App;
