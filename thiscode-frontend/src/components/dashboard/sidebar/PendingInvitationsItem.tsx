import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';
import Avatar from '../../../shared/ui/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';



interface PendingInvitationsItemProps {
  id: string;
  username:string;
  email:string;
  acceptFriendInvitation?: ({}) => void
  rejectFriendInvitation?: ({}) => void
}

const PendingInvitationsItem = ({id,username,email,acceptFriendInvitation,rejectFriendInvitation}:PendingInvitationsItemProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    if(!acceptFriendInvitation) return;
    acceptFriendInvitation({id})
    setButtonsDisabled(true);
  }

  const handleRejectInvitation = () => {
    if(!rejectFriendInvitation) return;
    rejectFriendInvitation({id});
    setButtonsDisabled(true);
  }
  return (
    <Tooltip title={email}>
      <div style={{width: '100%'}}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            
          }}
        >
          <Avatar username={username} />
          <Typography
          sx={{marginLeft:'7px', fontWeight:'bold', color:'#8e9297',flexGrow: 1}}
          variant='subtitle1'
          >{username}</Typography>
          <InvitationDecisionButtons
      disabled={buttonsDisabled}
      acceptInvitationHandler={handleAcceptInvitation}
      rejectInvitationHandler={handleRejectInvitation}
      />
        </Box>
        
      </div>
      
    </Tooltip>
      
    
  );
};

export default PendingInvitationsItem;