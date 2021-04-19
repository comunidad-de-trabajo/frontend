import React from 'react';
import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  List,
  Divider,
  makeStyles,
} from '@material-ui/core';
import ModalEmpresas from './ModalEmpresas';

function generate(element) {
  return [0, 1, 2, 3, 4].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  botonVer: {
    margin: '0 2px 0 2px',
    borderRadius: '10%',
    backgroundColor: '#FFD646',
    '&:hover': {
      backgroundColor: '#e8c23c',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
}));

const ListaAceptadas = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
                  <Button
                    edge="end"
                    aria-label="ver"
                    className={classes.botonVer}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    Ver
                  </Button>
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

export default ListaAceptadas;
