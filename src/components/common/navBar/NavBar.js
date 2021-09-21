import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from './logo_unahur1.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logo: {
    height: '32px',
    width: '256px',
    marginLeft: 0,
  },
  toolbar: {
    paddingLeft: 0,
  },
  iconoAvatar: {
    marginLeft: 'auto',
  },
}));

//TODO: Renderizar o no el logo del usuario segun haya token valido en el localstorage o no
const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={logo} alt="logo unahur" className={classes.logo} />
        </Link>
        <div className={classes.iconoAvatar}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
