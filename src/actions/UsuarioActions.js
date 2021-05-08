import {
    DELETE_USER,
    GET_USERS,
    SET_ERROR,
    STATUS_FORMULARIO,
    UPDATE_USER,
    SET_LOADING
} from './types';

import axios from 'axios';

export const getUsers = () => async dispatch => {
    try {
        const { data } = await axios.get('https://localhost:44303/api/usuario');
        dispatch({
            type: GET_USERS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const setEditUser = (elem) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_USER,
            payload: elem
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const deleteUser = (id) => async dispatch => {
    try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await axios.delete('https://localhost:44303/api/Usuario/'+id);
        dispatch({
            type: DELETE_USER,
            payload: id
        });

    } catch (error) {
        
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const abrirFormulario = (status) =>  dispatch => {
      
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