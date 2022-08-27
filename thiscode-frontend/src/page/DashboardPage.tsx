import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store/store';

import styled from '@mui/system/styled'
import SideBar from '../components/dashboard/sidebar/SideBar';
import FriendsSideBar from '../components/dashboard/FriendsSideBar';
import Messenger from '../components/dashboard/Messenger';
import AppBar from '../components/dashboard/appbar/AppBar';
import { getToken, logout } from '../store/slices/authSlice';
import { connectWithSocketServer } from '../realtime-communication/socketConnection';


const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
})
const DashboardPage = () => {
  const {userData} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if(!userData){
      dispatch(logout())
    }else{
      dispatch(getToken(JSON.parse(userData)));
      connectWithSocketServer();
    }
  }, [])
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