import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  box: {
    maxWidth: 600,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Comunidades de trabajo UNAHUR
        </Typography>
      </Grid>
      <Grid item xs={12} spacing={2}>
        <Typography>
          Es un espacio de iteraccion social y colaboracion para fortalecer el
          desarrollo local con una mirada regional, provincial y nacional.
        </Typography>
      </Grid>
      <Grid item xs={12} spacing={4}>
        <Typography>¿Como funciona?</Typography>
        <Typography>Consiste en las siguientes etapas.</Typography>
        <Typography>Registro de actores del sector productivos.</Typography>
        <Typography>Verificacion de datos.</Typography>
        <Typography>Publicacion de ofertas laborales.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <b>CONTACTO: comunidades@unahur.edu.ar</b>
        </Typography>
      </Grid>
    </>
  );
}
