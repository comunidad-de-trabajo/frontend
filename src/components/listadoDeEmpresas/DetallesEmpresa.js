import React from 'react';
import propTypes from 'prop-types';
import {
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

export default function DetallesEmpresa({ empresa }) {
  return (
    <div>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Cuit" />
          <ListItemSecondaryAction>{empresa.cuit}</ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Tipo empresa" />
          <ListItemSecondaryAction>
            {empresa.tipoEmpresa}
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Teléfono" />
          <ListItemSecondaryAction>{empresa.telefono}</ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}

DetallesEmpresa.propTypes = {
  empresa: propTypes.object,
};
