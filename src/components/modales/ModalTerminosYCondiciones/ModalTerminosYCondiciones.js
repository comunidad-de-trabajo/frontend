import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TerminosYCondiciones } from './TerminosYCondiciones';
import PropTypes from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const { isActive, handleChange } = props;

  return (
    isActive && (
      <>
        <Dialog
          open={isActive}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleChange}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Términos y Condiciones del servicio
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <TerminosYCondiciones />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleChange} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
}

AlertDialogSlide.propTypes = {
  isActive: PropTypes.bool,
  handleChange: PropTypes.func,
};
