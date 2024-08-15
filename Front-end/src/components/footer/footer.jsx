import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#3f51b5',
        color: 'white',
        padding: '1rem 0',
        bottom: 0,
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Footer Text */}
          <Typography variant="body1">
            © {new Date().getFullYear()} E Learning. All rights reserved.
          </Typography>

          {/* Footer Links */}
          <Box>
            <Link href="/privacy" color="inherit" sx={{ marginRight: '1rem' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" color="inherit" sx={{ marginRight: '1rem' }}>
              Terms of Service
            </Link>
            <Link href="/contact" color="inherit">
              Contact Us
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
