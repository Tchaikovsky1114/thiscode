import React from 'react';

import { useAppSelector } from '../store/store';

import styled from '@mui/system/styled'
import SideBar from '../components/dashboard/sidebar/SideBar';
import FriendsSideBar from '../components/dashboard/FriendsSideBar';
import Messenger from '../components/dashboard/Messenger';
import AppBar from '../components/dashboard/AppBar';


const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  
})
const DashboardPage = () => {
  const {userData} = useAppSelector(state => state.auth)
  console.log(userData.email);
  return (
    <> 
      <Wrapper >
      <SideBar />
      <FriendsSideBar/>
      <Messenger />
      <AppBar/>
    </Wrapper>
    </>
  );
};

export default DashboardPage;