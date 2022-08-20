import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#5865F2',
});

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 550,
          height: 'content-fit',
          bgcolor: '#36393f',
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          display:'flex',
          flexDirection:'column',
          padding: '25px',
          paddingBottom:'35px'
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthLayout;
