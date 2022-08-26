import React, { useEffect, useState } from 'react';
import AuthLayout from '../shared/ui/AuthLayout';
import Typography from '@mui/material/Typography'
import RegisterForm from '../components/auth/register/RegisterForm';
import RegisterFooter from '../components/auth/register/RegisterFooter';
import { getToken, useRegisterMutation } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import styled from '@mui/system/styled'
import { useAppDispatch, useAppSelector } from '../store/store';



const ErrorText = styled('div')({
  color: '#f41',
  fontSize: '12px'
})
  


const RegisterPage = () => {
  const [isFormValid,setIsFormValid] = useState(false);
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirm,setPasswordConfirm] = useState('');
  const [createUser,{data,isError,isLoading,error}] = useRegisterMutation();
  const [registerError,setRegisterError] = useState<string | null>(null);
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  
  const submitHandler = async () => {
      await createUser({email,username,password});
  }

  useEffect(() => {
    if(!data) return;
    localStorage.setItem('user',JSON.stringify(data));
    dispatch(getToken(data.userData))
    navigate('/dashboard');
  }, [data])


  return (
    <AuthLayout>
     <Typography variant="h5" sx={{color: 'white'}}>
      회원가입
     </Typography>
     <RegisterForm
     setIsFormValid={setIsFormValid}
     email={email}
     setEmail={setEmail}
     username={username}
     setUsername={setUsername}
     password={password}
     setPassword={setPassword}
     passwordConfirm={passwordConfirm}
     setPasswordConfirm={setPasswordConfirm}/>
    {error && 'data' in error && <ErrorText>{error.data}</ErrorText>}
    
     <RegisterFooter
     isFormValid={isFormValid}
     email={email}
     username={username}
     password={password}
     passwordConfirm={passwordConfirm}
     onClick={submitHandler}
     />
    </AuthLayout>
  );
};

export default RegisterPage;