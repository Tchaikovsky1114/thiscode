import { styled } from '@mui/system';
import React from 'react';


const AvatarPreview = styled('div')({
  height: '42px',
  width: '42px',
  background: '#5865f2',
  borderRadius: ' 42px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  marginLeft: '5px',
  color: 'white'
})

interface FriendAvatarProps {
  username:string;
  large?:boolean
}

const Avatar = ({username,large}:FriendAvatarProps) => {
  return (
    <AvatarPreview style={large ? {height: '80px', width:'80px'} : {}}>
      {username.substring(0,2)}
    </AvatarPreview>
  );
};

export default Avatar;