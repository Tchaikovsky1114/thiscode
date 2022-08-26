import React from 'react';
import styled from '@mui/system/styled'
import AddFriendButton from './sidebar/AddFriendButton';
import FriendsTitle from './sidebar/FriendsTitle';
import FriendsList from './sidebar/FriendsList';
import PendingInvitationsList from './sidebar/PendingInvitationsList';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  dislay: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2f3136',
  
})

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="메세지" />
      <FriendsList />
      <FriendsTitle title="초대" />
      
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendsSideBar;