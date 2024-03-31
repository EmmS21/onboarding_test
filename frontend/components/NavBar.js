import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NavBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="body1" style={{ fontFamily: 'monospace' }}>
            Learn with Reddy
          </Typography>
        </Box>
        <Button variant="outlined" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}