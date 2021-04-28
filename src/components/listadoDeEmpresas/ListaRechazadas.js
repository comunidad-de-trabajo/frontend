import React from 'react';
import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  List,
  Divider,
  makeStyles,
} from '@material-ui/core';
import ModalEmpresas from './ModalEmpresas';
import BotonesDeLista from './BotonesDeLista';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
}));

const ListaRechazadas = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <Grid item xs={12} md={12} className={classes.container}>
      <div>
        <Divider />
        <List>
          {generate(
            <React.Fragment>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <ListItemSecondaryAction>
                  <BotonesDeLista ver={true} aceptar={true} rechazar={false} />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </React.Fragment>
          )}
        </List>
        <ModalEmpresas open={open} setOpen={setOpen} />
      </div>
    </Grid>
  );
};

export default ListaRechazadas;
