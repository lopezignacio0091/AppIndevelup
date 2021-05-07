import { Button } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { useDispatch } from 'react-redux';
import {abrirFormulario} from '../../../../../actions/UsuarioActions';

const NewButton = () => {
    const dispatch = useDispatch();

    return (
        <Button
        variant="contained"
        color="primary"
        endIcon={<AddCircleOutlineRoundedIcon />}
        onClick={() => dispatch(abrirFormulario(true))}
      >
        Nuevo Usuario
      </Button>
    );
}

export default NewButton;
