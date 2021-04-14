import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistroEmpresa from './components/RegistroEmpresa';

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
    <Container maxWidth="xl" className={classes.root}>
      <Router>
        <Switch>
          <Route path="/">
            <RegistroEmpresa />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
