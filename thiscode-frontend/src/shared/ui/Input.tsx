import {styled} from '@mui/system'
import { ChangeEvent, useState } from 'react';

const Wrapper = styled('div')({
  display:'flex',
  justifyContent:'center',
  flexDirection: 'column',
  width: '100%'
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px'
})

const Input = styled('input')({
  flexGrow:1,
  height: '40px',
  border: '1px solid #aaa',
  borderRadius: '7px',
  color: '#dcddde',
  background: '#35393f',
  margin: 0,
  fontSize: '16px',
  outline:'#dca'
  
})

interface FormProps {
  value:string;
  setValue:React.Dispatch<React.SetStateAction<string>>
  label: string;
  type?:string;
  placeholder?: string;
}


const Form = (props:FormProps) => {
  const {value,setValue,label,type,placeholder} = props;
 
  const valueChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {currentTarget:{value:inputValue}} = e;
    setValue(inputValue);
  }
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
      value={value}
      onChange={valueChangeHandler}
      type={type}
      placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default Form;