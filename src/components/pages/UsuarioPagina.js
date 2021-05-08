import { Grid } from '@material-ui/core';
import React from 'react';
import {  useEffect } from 'react';
import { getUsers,setLoading} from '../../actions/UsuarioActions';
import UserTable from '../layout/usuarios/userTable/UserTable';
import NewButton from '../layout/usuarios/userTable/nuevoUserButton/NewButton';
import UserFormDialog from '../layout/usuarios/dialog/userFormDialog';
import { useSelector,useDispatch } from 'react-redux';
import Progress from '../layout/progress/Progress'

const UsuarioPagina = () => {
  const {abrirFormularioStatus,loading} = useSelector(state => state.UsuarioReducer); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getUsers());
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
            <NewButton />
            <UserTable />
        </Grid>

        <Grid container item xs={12} sm={12} md={4} lg={4}>
            <UserFormDialog open={abrirFormularioStatus} />
        </Grid>
        
    </Grid>
    );
}

export default UsuarioPagina;
