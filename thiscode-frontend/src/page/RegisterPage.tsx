import React, { useState } from 'react';
import AuthLayout from '../shared/ui/AuthLayout';
import {Typography} from '@mui/material'
import RegisterForm from '../components/auth/register/RegisterForm';
import RegisterFooter from '../components/auth/register/RegisterFooter';
const RegisterPage = () => {
  const [isFormValid,setIsFormValid] = useState(false);
  return (
    <AuthLayout>
     <Typography variant="h5" sx={{color: 'white'}}>
      회원가입
     </Typography>
     <RegisterForm setIsFormValid={setIsFormValid} />
     <RegisterFooter isFormValid={isFormValid} />
    </AuthLayout>
  );
};

export default RegisterPage;