import React from 'react';
import Btn from '@mui/material/Button'
import Avatar from '../../../shared/ui/Avatar';
import Typography from '@mui/material/Typography';
import OnlineIndicator from './OnlineIndicator';


interface FriendItemProps {
  id: number;
  username:string;
  isOnline: boolean;
}

const FriendItem = ({id,username,isOnline}:FriendItemProps) => {

  return (
    <Btn
    style={{
      width:'100%',
      height:'42px',
      marginTop:'10px',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textTransform: 'none',
      color: 'black',
      position:'relative'
    }}
    >
      <Avatar username={username} />
      <Typography style={{
        marginLeft:'7px',
        fontWeight:'bold',
        color: '#8e9297'
      }}
      variant="subtitle1"
      align='left'
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Btn>
  );
};

export default FriendItem;