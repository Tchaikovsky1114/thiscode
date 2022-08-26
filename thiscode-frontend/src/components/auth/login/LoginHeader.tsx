import React from 'react';
import Typography from '@mui/material/Typography'



const LoginHeader = () => {
  return (
    <Typography variant="h5" sx={{color: 'white'}}>
      오셨군요!
      <Typography sx={{color: '#b9bbbe'}}>
      다시 함께할 수 있어 기뻐요!
      </Typography>
    </Typography>
  );
};

export default LoginHeader;