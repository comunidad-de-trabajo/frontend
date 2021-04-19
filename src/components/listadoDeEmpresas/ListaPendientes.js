import React from 'react';
import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  List,
  Divider,
  Paper,
  makeStyles,
} from '@material-ui/core';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
  },
}));

const ListaPendientes = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12}>
      <div>
        <Paper className={classes.paper}>
          <List>
            {generate(
              <React.Fragment>
                <ListItem>
                  <ListItemText primary="Single-line item" />
                  <ListItemSecondaryAction>
                    <Button edge="end" aria-label="ver">
                      Ver
                    </Button>
                    <Button edge="end" aria-label="ver">
                      Aceptar
                    </Button>
                    <Button edge="end" aria-label="ver">
                      Rechazar
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            )}
          </List>
        </Paper>
      </div>
    </Grid>
  );
};

export default ListaPendientes;
