import {
    SET_ERROR, 
    SET_LOADING,
    SET_NEW_USER,
    GET_USERS,
    DELETE_USER,
    UPDATE_USER,
    STATUS_FORMULARIO,
    UPDATE_USER_LIST
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    users:[],
    userEdit:{},
    editStatus: false,
    abrirFormularioStatus: false,
    tituloFormulario: 'Formulario Nuevo'
}
const UsuarioReducer =  (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USER_LIST:
            return{
                ...state,
                users: state.users.map(elem => elem.id === action.payload.id ? action.payload : elem),
                editStatus:false,
                tituloFormulario:'Formulario Nuevo',
                userEdit:{}
            }
        case STATUS_FORMULARIO:
            return{
                ...state,
                abrirFormularioStatus: action.payload,
                tituloFormulario:'Formulario Nuevo',
                userEdit:{},
                editStatus:false,
            }
        case UPDATE_USER:
            return{
                ...state,
                userEdit:action.payload,
                editStatus:true,
                tituloFormulario:'Formulario Edicion',
                abrirFormularioStatus:true
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_NEW_USER:
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case DELETE_USER:
            return{
                ...state,
                // eslint-disable-next-line eqeqeq
                users: state.users.filter(elem => { return (elem.id != action.payload)})
        }
        default:
            return state;
    }
} 

export default UsuarioReducer;