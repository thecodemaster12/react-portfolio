import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';



const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon className='text-white'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          'color': 'red',
        }}
      >
        <MenuItem className='text-red-500' ><NavLink  to='/'><p className={'text-red-500'}>Home</p></NavLink></MenuItem>
        <MenuItem className='text-red-500' ><NavLink  to='/projects'>Projects</NavLink> </MenuItem>
        <MenuItem className='text-red-500' ><NavLink  to='/contact'>Contact</NavLink> </MenuItem>
      </Menu>
    </div>
  );
}

export default MobileMenu
