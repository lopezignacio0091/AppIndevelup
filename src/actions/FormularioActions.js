import Axios from 'axios';
import { 
    SET_ERROR,
    SET_LOADING, 
    SET_NEW_USER, 
    UPDATE_USER_LIST,
    SET_NEW_TASK,
    UPDATE_TASK_LIST
} from './types';
//import axios from 'axios';

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}

export const createUser = (user) => async dispatch => {
    try {
        const { data } = await Axios.post('/api/users', { data: { name: user.name, apellido: user.apellido, email: user.email } });

        dispatch({
            type: SET_NEW_USER,
            payload: data.user
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
        const { data } = await Axios.patch('/api/users/edit/'+id, {data: newValues});
        console.log(data);
        dispatch({
            type: UPDATE_USER_LIST,
            payload: data.user
        });

    } catch (error) {
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
        const { data } = await Axios.patch('/api/tasks/edit/'+id, {data: newValues});
       
        dispatch({
            type: UPDATE_TASK_LIST,
            payload: data.task
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

