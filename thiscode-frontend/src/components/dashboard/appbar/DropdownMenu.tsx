import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useAppDispatch } from '../../../store/store';
import { logout } from '../../../store/slices/authSlice';

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch()
  const open = Boolean(anchorEl);
  const menuOpenHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuCloseHandler = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div>
      <IconButton onClick={menuOpenHandler} style={{color:'white'}}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={menuCloseHandler}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        <MenuItem onClick={menuCloseHandler}>My account</MenuItem>
        <MenuItem onClick={menuCloseHandler}>Logout</MenuItem>
      </Menu>
    </div>
  );
}