import {
    SET_ERROR, 
    SET_LOADING,
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
}
const FormularioUsuarioReducer =  (state = initialState, action) => {
    switch(action.type){
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
} 

export default FormularioUsuarioReducer;