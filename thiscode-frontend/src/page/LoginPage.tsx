import styled from '@mui/system/styled';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFooter from '../components/auth/login/LoginFooter';
import LoginForm from '../components/auth/login/LoginForm';
import LoginHeader from '../components/auth/login/LoginHeader';
import AuthLayout from '../shared/ui/AuthLayout';
import { getToken, useLoginMutation } from '../store/slices/authSlice';
import { useAppDispatch } from '../store/store';


const ErrorText = styled('div')({
  color: '#f41',
  fontSize: '12px',
})

const LoginPage = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login,{data,isLoading,isError,error}] = useLoginMutation()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loginHandler = async () => {
    await login({email,password})
  }

  useEffect(() => {
    console.log(data);
    if(!data) return;
    localStorage.setItem('user',JSON.stringify(data));
    
    
    dispatch(getToken(data.userData))
    navigate('/dashboard');
  }, [data])
  
  return (
    <AuthLayout>
      <LoginHeader />
      <LoginForm
        isFormValid={isFormValid}
        setIsFormValid={setIsFormValid}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      {error && 'data' in error && <ErrorText>{error.data}</ErrorText>}
      <LoginFooter isFormValid={isFormValid} email={email} password={password} onClick={loginHandler} />
    </AuthLayout>
  );
};

export default LoginPage;
