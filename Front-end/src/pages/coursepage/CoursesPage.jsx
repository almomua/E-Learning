import React from 'react';
import { Box, Container } from '@mui/material';
import Item from '../../components/item/item'; // Adjust the import path as necessary

const CoursesPage = () => {
  const courses = [
    {
      courseId: 1,
      name: 'Introduction to Biology',
      assignedTeacher: 'Dr. Smith',
      numberOfStudents: 30,
      numberOfSessions: 12,
      imageUrl: 'https://example.com/path/to/biology-course-image.jpg', // Replace with a real image URL
    },
    // Add more course objects as needed
  ];

  return (
    <Container>
      <Box sx={{ padding: 2 }}>
        {courses.map((course, index) => (
          <Item
            key={index}
            courseId={course.courseId}
            name={course.name}
            assignedTeacher={course.assignedTeacher}
            numberOfStudents={course.numberOfStudents}
            numberOfSessions={course.numberOfSessions}
            imageUrl={course.imageUrl}
          />
        ))}
      </Box>
    </Container>
  );
};

export default CoursesPage;
