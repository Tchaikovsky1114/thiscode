import styled from '@emotion/styled';
import React from 'react';
import FriendItem from './FriendItem';


const DUMMY_FRIENDS = [
  {
    id: 1,
    username: 'Michael',
    isOnline: true,

  },
  {
    id: 2,
    username: 'Joe',
    isOnline: false,
    
  },
  {
    id: 3,
    username: 'Jayden',
    isOnline: true,
    
  }
];

const MainContainer = styled('div')({
  flexGrow:1,
  width: '100%',
  
})


const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map(item => (
        <FriendItem
        key={item.id}
        id={item.id}
        username={item.username}
        isOnline={item.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;