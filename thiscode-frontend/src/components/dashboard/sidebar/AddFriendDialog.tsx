import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import React, { useEffect, useState } from 'react';
import useValid from '../../../shared/ui/utils/useValid';
import Input from '../../../shared/ui/Input'
import { DialogTitle } from '@mui/material';
import Button from '../../../shared/ui/Button';
interface AddFriendDialogProps {
  isDialogOpen : boolean;
  closeDialogHandler: () => void
  sendFriendInvitation? : () => void
}

const AddFriendDialog = ({isDialogOpen,closeDialogHandler,sendFriendInvitation}:AddFriendDialogProps) => {
  const [email,setEmail] = useState('');
  const [isFormValid,setIsFormValid] = useState(false);
  const {emailValid} = useValid({email})
  const sendInvitationHandler = () => {
    // 친구초대 HTTP request 작성... 

  }

  const closeDialog = () => {
    closeDialogHandler();
    setEmail('');
  }

  useEffect(() => {
    setIsFormValid(emailValid)
  },[email,emailValid])

  return (
    <>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
      <DialogTitle sx={{padding:'20px 200px'}}>
        <Typography sx={{fontWeight:'bold',color:'#00adff'}}>친구 초대하기</Typography>
        </DialogTitle>
        <DialogContent>
          <Input value={email} setValue={setEmail} placeholder="이메일을 입력해주세요." label="이메일" type="text" />
          <Typography sx={{fontSize:'12px',color:'#aaa',marginTop:'10px'}}>초대장은 이메일이 아닌 thiscode 내에서 전달됩니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={sendInvitationHandler} disabled={!isFormValid} label="초대장 보내기" additionalStyles={{marginLeft: '15px',marginRight:'15px',marginBottom:'10px'}} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddFriendDialog;