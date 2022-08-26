import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../shared/ui/Input'
import useValid from '../../../shared/ui/utils/useValid';
import { useRegisterMutation } from '../../../store/slices/authSlice';

interface RegisterFormProps {
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>
  email:string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword : React.Dispatch<React.SetStateAction<string>>
  passwordConfirm : string
  setPasswordConfirm : React.Dispatch<React.SetStateAction<string>>
  username: string
  setUsername : React.Dispatch<React.SetStateAction<string>>

}

const RegisterForm = (props: RegisterFormProps) => {
  const {setIsFormValid,email,setEmail,password,setPassword,passwordConfirm,setPasswordConfirm,username,setUsername} = props;
  
  const {usernameValid,emailValid,passwordValid,passwordConfirmValid} = useValid({email,password,username,passwordConfirm})
  
  useEffect(() => {
    const getBoolean = usernameValid && emailValid && passwordValid && passwordConfirmValid && password === passwordConfirm
    setIsFormValid(getBoolean)
  },[passwordValid,passwordConfirmValid,password,passwordConfirm,username,usernameValid,email,emailValid])
  return (
    <>
     <Input value={email} setValue={setEmail} label="이메일" type="text" placeholder='이메일을 입력해주세요' /> 
     <Input value={username} setValue={setUsername} label="닉네임" type="text" placeholder='사용하실 닉네임을 입력해주세요' /> 
     <Input value={password} setValue={setPassword} label="비밀번호" type="password" placeholder='비밀번호를 입력해주세요' /> 
     <Input value={passwordConfirm} setValue={setPasswordConfirm} label="비밀번호 확인" type="password" placeholder='비밀번호를 한번 더 입력해주세요' /> 
  
    </>
  );
};

export default RegisterForm;