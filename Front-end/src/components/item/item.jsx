import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const Item = ({ courseId, name, assignedTeacher, numberOfStudents, numberOfSessions, imageUrl }) => {
  return (
    <Card sx={{ display: 'flex', minWidth: 275, marginBottom: 2 }}>
      {/* Course Image */}
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageUrl}
        alt={`Image for ${name}`}
      />
      {/* Course Details */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography color="text.secondary">
            Course ID: {courseId}
          </Typography>
          <Typography color="text.secondary">
            Assigned Teacher: {assignedTeacher}
          </Typography>
          <Typography color="text.secondary">
            Number of Students: {numberOfStudents}
          </Typography>
          <Typography color="text.secondary">
            Number of Sessions: {numberOfSessions}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Item;
