import React from 'react';
import Typography from '@mui/material/Typography'
import { textAlign } from '@mui/system';
interface FriendsTitleProps {
  title:string;
}

const FriendsTitle = ({title}:FriendsTitleProps) => {
  return (
    <Typography
    sx={{
      textTransform: 'uppercase',
      color: '#8e9297',
      fontSize: '14px',
      marginTop: '10px',
      textAlign: 'center'
    }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;