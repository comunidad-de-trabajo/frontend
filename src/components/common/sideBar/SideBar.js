import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { rolState } from '../../../recoil/usuario';
import tieneRolPermitido, { roles } from '../../../helpers/tieneRolPermitido';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  desplegarSideBar: {
    position: 'relative',
    top: 'calc(100vh/2 - 62px)',
    borderRadius: '50%',
    marginLeft: '5px',
  },
  botonesLista: {
    marginTop: '21%',
  },
});

const SideBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const history = useHistory();
  const userRole = useRecoilValue(rolState);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.botonesLista}>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemText primary={'Home'}></ListItemText>
        </ListItem>

        {tieneRolPermitido(userRole, roles.admin) ? (
          <ListItem
            button
            onClick={() => history.push('/listadoEmpresas/pendientes')}
          >
            <ListItemText primary={'Listado de empresas'}></ListItemText>
          </ListItem>
        ) : null}

        {tieneRolPermitido(userRole, roles.adminYEmpresa) ? (
          <ListItem button onClick={() => history.push('/registroDeEmpresa/0')}>
            <ListItemText primary={'Registro de empresas'}></ListItemText>
          </ListItem>
        ) : null}

        {tieneRolPermitido(userRole, roles.adminYEmpresa) ? (
          <ListItem button onClick={() => history.push('/ofertaLaboral/0')}>
            <ListItemText primary={'Publicar oferta laboral'}></ListItemText>
          </ListItem>
        ) : null}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <IconButton
          className={classes.desplegarSideBar}
          onClick={toggleDrawer('left', true)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default SideBar;
