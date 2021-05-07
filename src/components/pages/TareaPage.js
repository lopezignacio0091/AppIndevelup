import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import TaskFormDialog from '../layout/tareas/dialog/TaskFormDialog';
import NewButtonTask from '../layout/tareas/nuevoTaskButton/NewButtonTask';
import TareaTable from '../layout/tareas/TareaTable';

const TareaPage = () => {

    const {abrirFormularioStatus} = useSelector(state => state.TaskReducer);

    return (
        <Grid
        container
        direction="row"
        >
            <Grid container item xs={12} sm={12} md={8} lg={8}>
                <NewButtonTask />
                <TareaTable />
            </Grid>

            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <TaskFormDialog open={abrirFormularioStatus} />
            </Grid>
        </Grid>
    );
}

export default TareaPage;
