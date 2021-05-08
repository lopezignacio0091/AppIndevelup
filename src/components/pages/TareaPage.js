import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {setLoading,getTasks} from '../../actions/TaskActions';
import TaskFormDialog from '../layout/tareas/dialog/TaskFormDialog';
import NewButtonTask from '../layout/tareas/nuevoTaskButton/NewButtonTask';
import TareaTable from '../layout/tareas/TareaTable';
import Progress from '../layout/progress/Progress'

const TareaPage = () => {
    const {abrirFormularioStatus,loading } = useSelector(state => state.TaskReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoading());
        dispatch(getTasks());
      }, []);


      if(loading){
        return(
          <Progress/>
        )
      }

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
