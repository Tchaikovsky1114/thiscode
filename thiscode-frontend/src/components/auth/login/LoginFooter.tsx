import React, { useState } from 'react';
import Button from '../../../shared/ui/Button';
import RedirectMessage from '../../../shared/ui/RedirectMessage';
import {useNavigate} from 'react-router-dom'
import {Tooltip} from '@mui/material';

interface LoginFooterProps {
  isFormValid : boolean;
}

const LoginFooter = (props:LoginFooterProps) => {
  const {isFormValid} = props;
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log('로긴')
  }
  const redirectToRegisterPageHandler = () => {
    navigate('/register')
  }
  const getFormNotValidMessage = () => {
    return '비밀번호와 이메일을 확인해주세요.'
  }

  const getFormValidMessage = () => {
    return '로그인 버튼을 눌러주세요!'
  }

  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
   
    arrow
    >
    <div>
      <Button label="로그인" additionalStyles={{marginTop: '30px',fontWeight:'bold'}} disabled={!isFormValid} onClick={clickHandler} />
    </div>
    </Tooltip>
    <RedirectMessage text="아직 가입하지 않으셨나요?" redirectText='계정 생성하러 가기' additionalStyles={{marginTop:'5px'}} redirectHandler={redirectToRegisterPageHandler} />
    
    </>
  );
};

export default LoginFooter;
