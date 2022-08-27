import FiberManualRecord from '@mui/icons-material/FiberManualRecord'
import Box from '@mui/material/Box'
import React from 'react';

const OnlineIndicator = () => {
  return (
    <Box sx={{
      color: '#3ba55d',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right:'5px'
    }}>
      <FiberManualRecord sx={{width:'16px'}} />
    </Box>
  );
};

export default OnlineIndicator;