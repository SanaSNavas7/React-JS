import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/logo.png';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, PlaylistPlay as PlaylistPlayIcon, MiscellaneousServices as MiscellaneousServicesIcon, Contacts as ContactsIcon } from '@mui/icons-material';

const NavBarLinkBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavBarLink = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  color: '#4F5361',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': {
    color: 'white',
  },
}));

function Header() {
  const nav_titles = [
    { path: '/', display: 'Home' },
    { path: '/', display: 'Dishes' },
    { path: '/', display: 'Services' },
    { path: '/', display: 'About Us' },
  ];
  const NavBarLogo = styled("img")(({ theme }) => ({
   cursor:'pointer',
    
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px',
        backgroundColor: '#FED801',
        margin: '0', // Removed marginLeft and marginBottom
      }}
    >
      <NavBarLinkBox>
        {nav_titles.map((item, index) => (
          <NavBarLink key={index} variant="body2">
            {item.display}
          </NavBarLink>
        ))}
      </NavBarLinkBox>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', // Align items center for logo and buttons
          gap: '1.5rem', // Fixed spacing unit to rem
        }}
      >
        <MenuIcon/>
        <NavBarLogo src={logoImg} alt="Logo" style={{ height: '40px' }} /> {/* Added alt attribute and styling */}
        <NavBarLink variant="body2">Sign Up</NavBarLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttontext="Register"
        />
      </Box>
    </Box>
  );
}

export default Header;
