import React, { useState } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

const Subjects = () => {
  const [subjects, setSubjects] = useState([
    { CourseId: 1, Name: "Biology 101", AssignedTeacher: "Mr. Smith", NumStudents: 30, NumSessions: 10 },
    { CourseId: 2, Name: "Chemistry 101", AssignedTeacher: "Mrs. Johnson", NumStudents: 25, NumSessions: 12 },
  ]);

  const [editingSubject, setEditingSubject] = useState(null);
  const [newSubject, setNewSubject] = useState({ CourseId: '', Name: '', AssignedTeacher: '', NumStudents: '', NumSessions: '' });
  const [openDialog, setOpenDialog] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (subject) => {
    setEditingSubject(subject);
    setOpenDialog(true);
    setIsAdding(false);
  };

  const handleDelete = (courseId) => {
    setSubjects(subjects.filter(subject => subject.CourseId !== courseId));
  };

  const handleSave = () => {
    if (isAdding) {
      setSubjects([...subjects, newSubject]);
      setNewSubject({ CourseId: '', Name: '', AssignedTeacher: '', NumStudents: '', NumSessions: '' });
    } else {
      setSubjects(subjects.map(subject => subject.CourseId === editingSubject.CourseId ? editingSubject : subject));
    }
    setOpenDialog(false);
    setEditingSubject(null);
  };

  const handleChange = (e) => {
    if (isAdding) {
      setNewSubject({ ...newSubject, [e.target.name]: e.target.value });
    } else {
      setEditingSubject({ ...editingSubject, [e.target.name]: e.target.value });
    }
  };

  const handleAddSubject = () => {
    setIsAdding(true);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Subjects
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<AddIcon />} 
        onClick={handleAddSubject}
        sx={{ marginBottom: 2 }}
      >
        Add Subject
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Assigned Teacher</TableCell>
              <TableCell>Number of Students</TableCell>
              <TableCell>Number of Sessions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map(subject => (
              <TableRow key={subject.CourseId}>
                <TableCell>{subject.CourseId}</TableCell>
                <TableCell>{subject.Name}</TableCell>
                <TableCell>{subject.AssignedTeacher}</TableCell>
                <TableCell>{subject.NumStudents}</TableCell>
                <TableCell>{subject.NumSessions}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(subject)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(subject.CourseId)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {(editingSubject || isAdding) && (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{isAdding ? 'Add Subject' : 'Edit Subject'}</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Course ID"
              type="text"
              fullWidth
              name="CourseId"
              value={isAdding ? newSubject.CourseId : editingSubject.CourseId || ''}
              onChange={handleChange}
              disabled={!isAdding}
            />
            <TextField
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              name="Name"
              value={isAdding ? newSubject.Name : editingSubject.Name || ''}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Assigned Teacher"
              type="text"
              fullWidth
              name="AssignedTeacher"
              value={isAdding ? newSubject.AssignedTeacher : editingSubject.AssignedTeacher || ''}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Number of Students"
              type="number"
              fullWidth
              name="NumStudents"
              value={isAdding ? newSubject.NumStudents : editingSubject.NumStudents || ''}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Number of Sessions"
              type="number"
              fullWidth
              name="NumSessions"
              value={isAdding ? newSubject.NumSessions : editingSubject.NumSessions || ''}
              onChange={handleChange}
            />
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

export default Subjects;
