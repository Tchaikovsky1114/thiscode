import React from 'react';
import {Tooltip} from '@mui/material'
import Button from '../../../shared/ui/Button';
import RedirectMessage from '../../../shared/ui/RedirectMessage';
import {useNavigate} from 'react-router-dom'
interface RegisterFooterProps {
  isFormValid:boolean
}

const RegisterFooter = (props:RegisterFooterProps) => {
  const {isFormValid} = props;
  const navigate = useNavigate()
  const getFormNotValidMessage = () => {
    return '입력하신 회원 정보중에 유효하지 않은 입력이 있어요.'
  }

  const getFormValidMessage = () => {
    return '로그인 버튼을 눌러주세요!'
  }
  const clickHandler = () => {
    console.log('회원가입')
  }
  const redirectToLoginPageHandler = () => {
    navigate('/login')
  }
  return (
    <>
     <Tooltip
     title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
     arrow
     >
      <div>
        <Button
        label="회원가입"
        additionalStyles={{marginTop:'30px',fontWeight:'bold'}}
        disabled={!isFormValid}
        onClick={clickHandler} />
      </div>
      </Tooltip> 
      <RedirectMessage
      text="계정이 이미 있으신가요?"
      redirectText='로그인 하러가기'
      additionalStyles={{marginTop:'5px'}}
      redirectHandler={redirectToLoginPageHandler}
      />
    </>
  );
};

export default RegisterFooter;