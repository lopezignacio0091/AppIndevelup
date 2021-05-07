import { Button } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { useDispatch } from 'react-redux';
import {abrirFormularioTask} from '../../../../actions/TaskActions';

const NewButtonTask = () => {
    const dispatch = useDispatch();

    return (
        <Button
        variant="contained"
        color="primary"
        endIcon={<AddCircleOutlineRoundedIcon />}
        onClick={() => dispatch(abrirFormularioTask(true))}
      >
        Nueva tarea
      </Button>
    );
}

export default NewButtonTask;
