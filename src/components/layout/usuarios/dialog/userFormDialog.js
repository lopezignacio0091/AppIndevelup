import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormularioUsuario from '../form/FormularioUsuario';
import {abrirFormulario} from '../../../../actions/UsuarioActions';
import { useDispatch, useSelector } from 'react-redux';
import { DialogContent } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';

export default function UserFormDialog({open}) {
const dispatch = useDispatch();
const {tituloFormulario} = useSelector(state => state.UsuarioReducer);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(abrirFormulario(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{tituloFormulario}</DialogTitle>
        <DialogContent>
            <FormularioUsuario />
        </DialogContent>
      </Dialog>
    </div>
  );
}