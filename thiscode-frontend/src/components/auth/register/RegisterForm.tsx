import { useEffect, useState } from 'react';
import Input from '../../../shared/ui/Input'
import useValid from '../../../shared/ui/utils/useValid';

interface RegisterFormProps {
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterForm = (props: RegisterFormProps) => {
  const {setIsFormValid} = props;
  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [passwordConfirm,setPasswordConfirm] = useState('')
  const {usernameValid,emailValid,passwordValid,passwordConfirmValid} = useValid({email,password,username,passwordConfirm})
  

  useEffect(() => {
    const getBoolean = usernameValid && emailValid && passwordValid && passwordConfirmValid && password === passwordConfirm
    setIsFormValid(getBoolean)
  },[passwordValid,passwordConfirmValid,password,password])
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