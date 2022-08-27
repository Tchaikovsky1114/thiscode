import React from 'react';
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';



interface InvitationDecisionButtonsProps {
  rejectInvitationHandler: () => void
  acceptInvitationHandler: () => void
  disabled: boolean
}

const InvitationDecisionButtons = ({rejectInvitationHandler,acceptInvitationHandler,disabled}:InvitationDecisionButtonsProps) => {
  return (
    <Box sx={{display: 'flex',marginRight:'5px'}}>
      <IconButton
       style={{color: 'green'}}
       disabled={disabled}
       onClick={acceptInvitationHandler}
      >
        <CheckIcon sx={{width:'18px'}} />
      </IconButton>
      <IconButton
       style={{color: 'orangered'}}
       disabled={disabled}
       onClick={rejectInvitationHandler}
      >

        <ClearIcon sx={{width:'18px'}} />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;