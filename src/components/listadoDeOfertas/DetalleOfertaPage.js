import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ModalEmpresas from './ModalEmpresas';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { getOfertaId } from '../../services/listado-ofertas/listado-ofertas-service';

const FilaDato = (props) => {
  const { nombreDato, dato } = props;
  return (
    <>
      {' '}
      <Grid container item alignItems="center" sm={6}>
        <Typography>{nombreDato}: </Typography>
      </Grid>
      <Grid container item alignItems="center" sm={6}>
        <Typography>{dato}</Typography>
      </Grid>
    </>
  );
};

const DetalleOfertaPage = () => {
  const [openModalEmpresa, setOpenModalEmpresa] = useState(false);
  const [oferta, setOferta] = useState({});
  let params = useParams();

  const fetchDetalleOferta = async () => {
    setOferta(await getOfertaId(params.id));
  };

  useEffect(() => {
    fetchDetalleOferta();
  }, []);

  return (
    <>
      <Container>
        <Card>
          <CardContent>
            <Grid container spacing="2">
              <Grid container item alignItems="center" sm={6}>
                <Typography>Datos de la empresa</Typography>
              </Grid>
              <Grid container item alignItems="center" sm={6}>
                <Button
                  edge="end"
                  aria-label="ver"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setOpenModalEmpresa(true);
                  }}
                >
                  Ver
                </Button>
              </Grid>
              {Object.entries(oferta).map((entrie) => {
                return (
                  <FilaDato
                    key={entrie.id}
                    nombreDato={entrie[0]}
                    dato={entrie[1]}
                  />
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <ModalEmpresas
        open={openModalEmpresa}
        setOpen={setOpenModalEmpresa}
        empresa={null}
      />
    </>
  );
};

FilaDato.propTypes = {
  nombreDato: PropTypes.string,
  dato: PropTypes.string,
};

export default DetalleOfertaPage;
