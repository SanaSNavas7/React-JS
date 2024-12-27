import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
const CustomButton = ({
  backgroundColor,
  color,
  buttontext,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}) => {

const CustomButton = styled(Button)(({ theme}) => ({
  backgroundColor: backgroundColor,
  color: color,
  fontWeight: '700',
  fontSize: '14px',
  cursor: 'pointer',
  padding: '0.5rem 1.25rem',
  borderRadius: '7px',
  textTransform: 'none',
  display: 'block',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: color,
    color: backgroundColor,
    borderColor: backgroundColor,
  },
  [theme.breakpoints.down('md')]: {
    margin: (welcomeBtn || getStartedBtn) ? theme.spacing(0, 'auto', 3, 'auto') : undefined,
    width: (welcomeBtn || getStartedBtn) ? '90%' : undefined,
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: guideBtn ? theme.spacing(3) : undefined,
    width: guideBtn ? '90%' : undefined,
  },
}));


  return (
    <CustomButton>
      {buttontext}
      </CustomButton>
  );
};

export default CustomButton;
