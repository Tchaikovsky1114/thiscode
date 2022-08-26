
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor:'pointer',
  marginLeft:'8px'
})

interface RedirectProps {
  text:string;
  redirectText:string;
  additionalStyles:any;
  redirectHandler: () => void
}
const Redirect = (props:RedirectProps) => {
  const {text,redirectText,additionalStyles,redirectHandler} = props;
  return (
    <Typography
    sx={{color: '#72767d'}}
    style={additionalStyles ? additionalStyles : {}}
    variant= 'subtitle2'
    >
    {text}
    <RedirectText onClick={redirectHandler}>
      {redirectText}
    </RedirectText>
    </Typography>
  );
};

export default Redirect;