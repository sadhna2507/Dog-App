import React from 'react'

import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" top="0" zIndex="1" >
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            color="black"

            
          >
            <PetsIcon />
          </IconButton>The Doggo App</Typography>

          {/* <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button> */}

          {/* <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button> */}

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar