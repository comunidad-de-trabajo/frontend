import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '50px',
  },
  fixedHeader: {
    marginBottom: '40px',
    fontSize: '30px',
    color: 'DarkRed',
    backgroundColor: 'Khaki',
    textAlign: 'center',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="xl" className={classes.root}>
        {/* <Router>
        <Switch>
          <Route path="/recoil/usuarios/:id">
            <RecoilDatosUsuario />
          </Route>
          <Route path="/recoil">
            <RecoilHome />
          </Route>
          <Route path="/usuarios/:id">
            <DatosUsuario />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> */}
      </Container>
    </React.Fragment>
  );
}
