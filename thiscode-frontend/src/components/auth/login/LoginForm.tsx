import React, { useEffect, useState } from 'react';
import Input from '../../../shared/ui/Input';
import useValid from '../../../shared/ui/utils/useValid';

interface LoginFormProps {
  isFormValid: boolean
  setIsFormValid:React.Dispatch<React.SetStateAction<boolean>>
  email:string
  setEmail:React.Dispatch<React.SetStateAction<string>>
  password:string
  setPassword:React.Dispatch<React.SetStateAction<string>>
}

const LoginForm = (props:LoginFormProps) => {
  const {isFormValid,setIsFormValid,email,setEmail,password,setPassword} = props;

  const {emailValid,passwordValid} = useValid({email,password})

  useEffect(() => {
    const getBoolean = emailValid && passwordValid
    
    setIsFormValid(getBoolean)
  },[emailValid,passwordValid,isFormValid])
  return (
    <>
      <Input
      value={email}
      setValue={setEmail}
      label="이메일"
      type="text"
      placeholder="이메일을 입력해주세요"
      />
      <Input
      value={password}
      setValue={setPassword}
      label="비밀번호"
      type="password"
      placeholder="비밀번호를 입력해주세요"
      />
    </>
  );
};

export default LoginForm;