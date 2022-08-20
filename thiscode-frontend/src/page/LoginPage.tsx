import React, { useEffect, useState } from 'react';
import LoginFooter from '../components/auth/login/LoginFooter';
import LoginForm from '../components/auth/login/LoginForm';
import LoginHeader from '../components/auth/login/LoginHeader';
import AuthLayout from '../shared/ui/AuthLayout';


const LoginPage = () => {
  const [isFormValid,setIsFormValid] = useState(false);


  return (
    <AuthLayout>
      <LoginHeader  />
      <LoginForm isFormValid={isFormValid} setIsFormValid={setIsFormValid} />
      <LoginFooter isFormValid={isFormValid} />
    </AuthLayout>
  );
};

export default LoginPage;