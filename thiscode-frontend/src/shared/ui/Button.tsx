import React from 'react';
import Btn from '@mui/material/Button'

interface ButtonProps {
  label:string;
  additionalStyles:any;
  disabled:boolean;
  onClick: () => void

}

const Button = (props:ButtonProps) => {
  const {label,additionalStyles, disabled,onClick} = props;
  return (
    <Btn
    variant='contained'
    sx={{bgcolor:'#5865f2', color:'white',fontSize:'16px',fontWeight:500,width:'100%',height:'40px'}}
    style={additionalStyles ? additionalStyles : {}}
    disabled={disabled}
    onClick={onClick}
    >
      {label}
    </Btn>
  );
};

export default Button;