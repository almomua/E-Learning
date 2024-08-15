import React, { useState } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon, Add as AddIcon } from '@mui/icons-material';

const Users = () => {
  const [users, setUsers] = useState([
    { UserId: 1, Username: "adminUser", PasswordHash: "hashedPassword1", Role: "Teacher" },
    { UserId: 2, Username: "customerUser", PasswordHash: "hashedPassword2", Role: "Student" },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ UserId: '', Username: '', PasswordHash: '', Role: 'Teacher' });
  const [openDialog, setOpenDialog] = useState(false);
  const [showPassword, setShowPassword] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (user) => {
    setEditingUser(user);
    setOpenDialog(true);
    setIsAdding(false);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.UserId !== userId));
  };

  const handleSave = () => {
    if (isAdding) {
      setUsers([...users, newUser]);
      setNewUser({ UserId: '', Username: '', PasswordHash: '', Role: 'Teacher' });
    } else {
      setUsers(users.map(user => user.UserId === editingUser.UserId ? editingUser : user));
    }
    setOpenDialog(false);
    setEditingUser(null);
  };

  const handleChange = (e) => {
    if (isAdding) {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    } else {
      setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
    }
  };

  const togglePasswordVisibility = (userId) => {
    setShowPassword(prevState => ({
      ...prevState,
      [userId]: !prevState[userId]
    }));
  };

  const handleAddUser = () => {
    setIsAdding(true);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<AddIcon />} 
        onClick={handleAddUser}
        sx={{ marginBottom: 2 }}
      >
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password Hash</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.UserId} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <TableCell>{user.UserId}</TableCell>
                <TableCell>{user.Username}</TableCell>
                <TableCell>
                  {showPassword[user.UserId] ? user.PasswordHash : '**********'}
                  <IconButton onClick={(e) => { e.stopPropagation(); togglePasswordVisibility(user.UserId); }}>
                    {showPassword[user.UserId] ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>{user.Role}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => { e.stopPropagation(); handleEdit(user); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={(e) => { e.stopPropagation(); handleDelete(user.UserId); }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {(editingUser || isAdding) && (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{isAdding ? 'Add User' : 'Edit User'}</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="User ID"
              type="text"
              fullWidth
              name="UserId"
              value={isAdding ? newUser.UserId : editingUser.UserId || ''}
              onChange={handleChange}
              disabled={!isAdding}
            />
            <TextField
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              name="Username"
              value={isAdding ? newUser.Username : editingUser.Username || ''}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Password Hash"
              type="text"
              fullWidth
              name="PasswordHash"
              value={isAdding ? newUser.PasswordHash : editingUser.PasswordHash || ''}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => togglePasswordVisibility(isAdding ? newUser.UserId : editingUser.UserId)}>
                    {showPassword[isAdding ? newUser.UserId : editingUser.UserId] ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              margin="dense"
              label="Role"
              select
              fullWidth
              name="Role"
              value={isAdding ? newUser.Role : editingUser.Role || ''}
              onChange={handleChange}
            >
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleSave} color="primary">{isAdding ? 'Add' : 'Save'}</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Users;
