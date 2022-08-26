import { useCallback, useEffect, useState } from "react";

interface validateLoginFormProps {
  email:string;
  password?:string;
  passwordConfirm?:string;
  username?:string;

}

const useValid = ({email,password,passwordConfirm,username}:validateLoginFormProps) => {
  
  const [emailValid,setEmailValid] = useState(false)
  const [passwordValid,setPasswordValid] = useState(false)
  const [usernameValid,setUsernameValid] = useState(false)
  const [passwordConfirmValid,setPasswordConfirmValid] = useState(false);


  const validateEmailLength = useCallback(() => {
    const emailPattern  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(emailPattern.test(email)){
      setEmailValid(true)
    }else{
       setEmailValid(false)
    }
  },[email])
  
  const validateUsername = useCallback(() => {
    if(!username) return 
    if(username.length > 2 && username.length < 10){
      setUsernameValid(true);
    }else{
      setUsernameValid(false)
    }
  },[username])


  const validatePasswordLength = useCallback(() => {
    if(!password) return;
    if(password.length > 5 && password.length < 16){
       setPasswordValid(true)
    }else{
       setPasswordValid(false);
    }
    
  },[password,passwordConfirm])

  const validatePasswordConfirmLength = useCallback(() => {
    if(!passwordConfirm) return;
    if(passwordConfirm.length > 5 && passwordConfirm.length < 16) {
       setPasswordConfirmValid(true)
    }else{
       setPasswordConfirmValid(false)
    }
  },[passwordConfirm,password])

  useEffect(() => {

    validateEmailLength()
    validatePasswordLength()
    validatePasswordConfirmLength()
    validateUsername()
  },[email,password,username,passwordConfirm])

  return {
  emailValid,
  passwordValid,
  usernameValid,
  passwordConfirmValid,

  }
}

export default useValid;