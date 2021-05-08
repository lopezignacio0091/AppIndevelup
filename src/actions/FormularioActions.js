import Axios from 'axios';
import { 
    SET_ERROR,
    SET_LOADING, 
    SET_NEW_USER, 
    UPDATE_USER_LIST,
    SET_NEW_TASK,
    UPDATE_TASK_LIST,
} from './types';
//import axios from 'axios';

export const setLoading = () => dispatch=>{
    dispatch({
        type: SET_LOADING,
    })
}

export const createUser = (user) => async dispatch => {
    try {
        const { data } = await Axios.post('https://localhost:44303/api/Usuario', {"Nombre":user.name});
        dispatch({
            type: SET_NEW_USER,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const editUser = (newValues,id) => async dispatch => {
    try {
        const { data } = await Axios.put('https://localhost:44303/api/Usuario/'+id,{"Nombre":newValues.name,"Id":id});
        dispatch({
            type: UPDATE_USER_LIST,
            payload: data
        });

    } catch (error) {
        console.log(error);
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const createTask = (task) => async dispatch => {
    try {
        const { data } = await Axios.post('/api/tasks', { data: { codigo: task.codigo, descripcion: task.descripcion, duracionPlanificada: task.duracionPlanificada, usuarioId: task.usuarioId } });

        dispatch({
            type: SET_NEW_TASK,
            payload: data.task
        })

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const editTask = (newValues,id) => async dispatch => {
    try {
        const { data } = await Axios.put('https://localhost:44303/api/Tarea/'+id, {"DuracionPlanificada":newValues.duracionPlanificada,"Codigo":newValues.codigo,"Descripcion":newValues.descripcion,"Usuario":{"Id":newValues.usuarioId},"Id":id});
       
        dispatch({
            type: UPDATE_TASK_LIST,
            payload: data
        });

    } catch (error) {
        console.log(error);
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

