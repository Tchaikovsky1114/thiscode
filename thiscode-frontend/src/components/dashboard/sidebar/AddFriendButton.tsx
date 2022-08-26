import React, { useState } from 'react';
import Button from '../../../shared/ui/Button';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '20px',
  width: '80%',
  height: '30px',
  background: '#3ba55d',
  fontWeight: 'bold'
}

const AddFriendButton = () => {
  const [isDialogOpen,setIsDialogOpen] = useState(false);
  const openAddFriendDialogHandler = () => {
    setIsDialogOpen(!isDialogOpen);
  }
  return (
    <>
      <Button additionalStyles={additionalStyles} label='친구 추가하기' onClick={openAddFriendDialogHandler} />
      <AddFriendDialog
      isDialogOpen={isDialogOpen}
      closeDialogHandler = {openAddFriendDialogHandler}
      />
    </>
  );
};

export default AddFriendButton;