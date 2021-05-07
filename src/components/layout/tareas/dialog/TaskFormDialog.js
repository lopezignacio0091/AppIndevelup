import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormularioTask from '../form/FormularioTask';
import { abrirFormularioTask } from '../../../../actions/TaskActions';
import { useDispatch, useSelector } from 'react-redux';
import { DialogContent } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { getUsers } from '../../../../actions/UsuarioActions';

export default function TaskFormDialog({ open }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  const { tituloFormulario } = useSelector(state => state.TaskReducer);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(abrirFormularioTask(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{tituloFormulario}</DialogTitle>
        <DialogContent>
          <FormularioTask />
        </DialogContent>
      </Dialog>
    </div>
  );
}