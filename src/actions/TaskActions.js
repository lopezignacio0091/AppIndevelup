import {
    GET_TASKS,
    DELETE_TASK,
    UPDATE_TASK,
    SET_ERROR,
    STATUS_FORMULARIO,
    SET_LOADING
} from './types';

import axios from 'axios';

export const getTasks = () => async dispatch => {
    try {
        const { data } = await axios.get('https://localhost:44303/api/Tarea');

        dispatch({
            type: GET_TASKS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const setEditTask = (elem) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_TASK,
            payload: elem
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const deleteTask = (id) => async dispatch => {
    try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await axios.delete('https://localhost:44303/api/Tarea/'+id);

        dispatch({
            type: DELETE_TASK,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const abrirFormularioTask = (status) =>  dispatch => {
      
    dispatch({
        type: STATUS_FORMULARIO,
        payload: status
    });
}


export const setLoading = () => dispatch=> {
    dispatch({
        type: SET_LOADING,
    })
};