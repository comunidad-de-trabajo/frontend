import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import propTypes from 'prop-types';
import { getAccionesModalConfirmacion } from './acciones-modal-confirmacion';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import {
  idOferta,
  editarCondicionesOferta,
  editarDatosOfertaLaboral,
  editarRequisitosOferta,
  editarResponsableOferta,
} from '../../../recoil/editarOferta';

const ModalConfirmarAccion = (props) => {
  const { titulo, mensaje, accion, empresa } = props;
  const { open, setOpen } = props;
  const { setOpenAlert } = props;
  const { render } = props;
  let history = useHistory();
  const [ofertaId, setOfertaId] = useRecoilState(idOferta);
  const [datosOfertaLaboral, setDatosOfertaLaboral] = useRecoilState(
    editarDatosOfertaLaboral
  );
  const [requisitosOfertaLaboral, setRequisitosOfertaLaboral] = useRecoilState(
    editarRequisitosOferta
  );
  const [
    condicionesOfertaLaboral,
    setCondicionesOfertaLaboral,
  ] = useRecoilState(editarCondicionesOferta);
  const [
    responsableOfertaLaboral,
    setResponsableOfertaLaboral,
  ] = useRecoilState(editarResponsableOferta);

  const handleClose = () => {
    let acciones = getAccionesModalConfirmacion();
    if (accion === 'aceptar') {
      acciones.aceptar(setOpenAlert, setOpen, empresa.id, render);
      setOfertaId({
        ...ofertaId,
        id: empresa.id,
      });
      setDatosOfertaLaboral({
        ...datosOfertaLaboral,
        fechaVigencia: empresa.fechaVigencia,
        tituloBusqueda: empresa.tituloBusqueda,
        descripcionEmpresa: empresa.descripcionEmpresa,
        mision: empresa.mision,
        responsabilidades: empresa.responsabilidades,
      });
      setRequisitosOfertaLaboral({
        ...requisitosOfertaLaboral,
        secundarioCompleto: empresa.secundarioCompleto,
        paqueteOffice: empresa.paqueteOffice,
        licenciaConducir: empresa.licenciaConducir,
        edad: empresa.edad,
        desdeEdad: empresa.desdeEdad,
        hastaEdad: empresa.hastaEdad,
        experienciaPrevia: empresa.experienciaPrevia,
        experienciaPreviaDescription: empresa.experienciaPreviaDescription,
        residencia: empresa.residencia,
        areasEstudio: empresa.areasEstudio,
        competencias: empresa.competencias,
        otrosDetalles: empresa.otrosDetalles,
      });
      setCondicionesOfertaLaboral({
        ...condicionesOfertaLaboral,
        jornada: empresa.jornada,
        contrato: empresa.contrato,
        lugarTrabajo: empresa.lugarTrabajo,
        ofrecen: empresa.ofrecen,
      });
      setResponsableOfertaLaboral({
        ...responsableOfertaLaboral,
        nombreCompletoRepresentante: empresa.nombreCompletoRepresentante,
        emailRepresentante: empresa.emailRepresentante,
        detalles: empresa.detalles,
        otrasAclaraciones: empresa.otrasAclaraciones,
      });

      /*VALIDACION     
      setDatosOfertaLaboralValidacion({
        ...datosOfertaLaboralValidacion,
        fechaVigencia: empresa.fechaVigencia,
        tituloBusqueda: empresa.tituloBusqueda,
        descripcionEmpresa: empresa.descripcionEmpresa,
        mision: empresa.mision,
        responsabilidades: empresa.responsabilidades,
      });
      setRequisitosOfertaLaboralValidacion({
        ...requisitosOfertaLaboralValidacion,
        secundarioCompleto: empresa.secundarioCompleto,
        paqueteOffice: empresa.paqueteOffice,
        licenciaConducir:empresa.licenciaConducir,
        edad: empresa.edad,
        desdeEdad: empresa.desdeEdad,
        hastaEdad: empresa.hastaEdad,
        experienciaPrevia: empresa.experienciaPrevia,
        experienciaPreviaDescription: empresa.experienciaPreviaDescription,
        residencia: empresa.residencia ,
        areasEstudio: empresa.areasEstudio,
        competencias: empresa.competencias,
        otrosDetalles: empresa.otrosDetalles,
      });
      setCondicionesOfertaLaboralValidacion({
        ...condicionesOfertaLaboralValidacion,
        jornada: empresa.jornada,
        contrato: empresa.contrato,
        lugarTrabajo: empresa.lugarTrabajo,
        ofrecen: empresa.ofrecen,
      });
      setResponsableOfertaLaboralValidacion({
        ...responsableOfertaLaboralValidacion,
        nombreCompletoRepresentante: empresa.nombreCompletoRepresentante,
        emailRepresentante: empresa.emailRepresentante,
        detalles: empresa.detalles,
        otrasAclaraciones: empresa.otrasAclaraciones,
      });
      */
      history.push('/editarOferta');
    } else if (accion === 'rechazar') {
      acciones.rechazar(setOpenAlert, setOpen, empresa.id, render);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="primary"
          >
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ModalConfirmarAccion.propTypes = {
  empresa: propTypes.object,
  accion: propTypes.string,
  titulo: propTypes.string,
  mensaje: propTypes.string,
  open: propTypes.bool,
  setOpen: propTypes.func,
  setOpenAlert: propTypes.func,
  render: propTypes.func,
};

export default ModalConfirmarAccion;
