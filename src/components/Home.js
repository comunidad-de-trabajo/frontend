import { Grid, makeStyles, Typography } from '@material-ui/core';
import MediaCard from './common/MediaCard';

const useStyles = makeStyles(() => ({
  content: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  contact: {
    marginTop: 30,
  },
  text: {
    marginBottom: 20,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <MediaCard>
        <Grid
          item
          xs={12}
          spacing={4}
          align="center"
          alignItems="center"
          className={classes.content}
        >
          <Typography variant="h4" gutterBottom className={classes.text}>
            Comunidades de trabajo UNAHUR
          </Typography>
          <Typography variant="h6" className={classes.text}>
            Es un espacio de iteraccion social y colaboracion para fortalecer el
            desarrollo local con una mirada regional, provincial y nacional.
          </Typography>
          <Typography className={classes.content}>¿Como funciona?</Typography>
          <Typography className={classes.content}>
            Consiste en las siguientes etapas.
          </Typography>
          <Typography className={classes.content}>
            Registro de actores del sector productivos.
          </Typography>
          <Typography className={classes.content}>
            Verificacion de datos.
          </Typography>
          <Typography className={classes.content}>
            Publicacion de ofertas laborales.
          </Typography>
          <Typography align="center" className={classes.contact}>
            <b>CONTACTO: comunidades@unahur.edu.ar</b>
          </Typography>
        </Grid>
      </MediaCard>
    </>
  );
}
