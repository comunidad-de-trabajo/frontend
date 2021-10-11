import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ModalEmpresas from '../listadoDeEmpresas/ModalEmpresas';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import {
  getEmpresaByUsuarioId,
  getOfertaId,
} from '../../services/listado-ofertas/listado-ofertas-service';

const FilaDato = (props) => {
  const { nombreDato, dato } = props;
  return (
    <>
      {' '}
      <Grid container item alignItems="center" sm={6}>
        <Typography variant="body2">{nombreDato}: </Typography>
      </Grid>
      <Grid container item alignItems="center" sm={6}>
        <Typography variant="body2">{dato}</Typography>
      </Grid>
    </>
  );
};

const DetalleOfertaPage = () => {
  const [openModalEmpresa, setOpenModalEmpresa] = useState(false);
  const [oferta, setOferta] = useState({});
  const [empresa, setEmpresa] = useState({});
  let params = useParams();

  const fetchDetalleOferta = async () => {
    const oferta = await getOfertaId(params.id);
    setOferta(oferta);
  };
  const fetchDetalleEmpresa = async () => {
    const empresa = await getEmpresaByUsuarioId(oferta.usuarioId);
    setEmpresa(empresa);
  };

  useEffect(() => {
    fetchDetalleOferta();
  }, []);

  useEffect(() => {
    fetchDetalleEmpresa();
  }, [oferta]);

  return (
    <>
      <Container>
        <Card>
          <CardContent>
            <Grid container spacing="2">
              <Grid container item sm={12}>
                <Typography variant="h4">{oferta.tituloBusqueda}</Typography>
              </Grid>
              <Divider />
              <Grid container item alignItems="center" sm={6}>
                <Typography variant="body2">Datos de la empresa</Typography>
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
              <FilaDato
                nombreDato="Fecha de vigencia"
                dato={oferta.fechaVigencia}
              />

              <FilaDato
                nombreDato="Descripcion empresa"
                dato={oferta.descripcionEmpresa}
              />

              <FilaDato nombreDato="Mision" dato={oferta.mision} />

              <FilaDato
                nombreDato="Responsabilidades"
                dato={oferta.responsabilidades}
              />

              <Grid container item sm={12}>
                <Divider />
                <Typography variant="subtitle2"> Requisitos </Typography>
              </Grid>

              <FilaDato
                nombreDato="Secundario completo"
                dato={oferta.secundarioCompleto}
              />

              <FilaDato
                nombreDato="Paquete de office"
                dato={oferta.paqueteOffice}
              />

              <FilaDato
                nombreDato="Licencia de conducir"
                dato={oferta.licenciaConducir}
              />

              <FilaDato nombreDato="Edad" dato={oferta.edad} />

              <FilaDato nombreDato="Desde" dato={oferta.desdeEdad} />

              <FilaDato nombreDato="Hasta" dato={oferta.hastaEdad} />

              <FilaDato
                nombreDato="Experiencia previa"
                dato={oferta.experienciaPrevia}
              />

              <FilaDato
                nombreDato="Requisitos en cuanto a la experiencia"
                dato={oferta.experienciaPreviaDescription}
              />

              <FilaDato nombreDato="Residencia" dato={oferta.residencia} />

              <FilaDato
                nombreDato="Areas de estudio"
                dato={oferta.areasEstudio}
              />

              <FilaDato nombreDato="Competencias " dato={oferta.competencias} />

              <FilaDato
                nombreDato="Otros detalles"
                dato={oferta.otrosDetalles}
              />

              <Grid container item sm={12}>
                <Divider />
                <Typography variant="subtitle2">Datos de la oferta</Typography>
              </Grid>

              <FilaDato nombreDato="Jornada" dato={oferta.jornada} />

              <FilaDato nombreDato="Contrato" dato={oferta.contrato} />

              <FilaDato
                nombreDato="Lugar de trabajo"
                dato={oferta.lugarTrabajo}
              />

              <FilaDato nombreDato="Ofrecen" dato={oferta.ofrecen} />

              <Grid container item sm={12}>
                <Divider />
                <Typography variant="subtitle2">
                  Datos del representante
                </Typography>
              </Grid>

              <FilaDato
                nombreDato="Nombre completo"
                dato={oferta.nombreCompletoRepresentante}
              />

              <FilaDato nombreDato="Email" dato={oferta.emailRepresentante} />

              <FilaDato nombreDato="Detalles" dato={oferta.detalles} />

              <FilaDato
                nombreDato="Otras aclaraciones"
                dato={oferta.otrasAclaraciones}
              />
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <ModalEmpresas
        open={openModalEmpresa}
        setOpen={setOpenModalEmpresa}
        empresa={empresa}
      />
    </>
  );
};

FilaDato.propTypes = {
  nombreDato: PropTypes.string,
  dato: PropTypes.string,
};

export default DetalleOfertaPage;
