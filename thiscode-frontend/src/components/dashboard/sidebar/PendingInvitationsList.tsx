import React from 'react';
import styled from '@emotion/styled';
import PendingInvitationsItem from './PendingInvitationsItem';


const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Michael',
      email: 'rolercoster@gmail.com'
    }
  },
  {
    _id: '2',
    senderId: {
      username: 'Lauren',
      email: 'tapahs2022@gmail.com'
    }
  },
  {
    _id: '3',
    senderId: {
      username: 'John',
      email: 'trailer844521@gmail.com'
    }
  }
]

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  marginLeft:'10px',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto'
})
const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((item) => (
        <PendingInvitationsItem key={item._id} id={item._id} username={item.senderId.username} email={item.senderId.email} />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;