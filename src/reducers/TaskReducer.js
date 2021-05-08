import {
    SET_ERROR, 
    SET_LOADING,
    SET_NEW_TASK,
    GET_TASKS,
    DELETE_TASK,
    UPDATE_TASK,
    STATUS_FORMULARIO,
    UPDATE_TASK_LIST
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    tasks:[],
    taskEdit:{},
    editStatus: false,
    abrirFormularioStatus: false,
    tituloFormulario: 'Formulario Nuevo'
}
const TaskReducer =  (state = initialState, action) => {
    switch(action.type){
        case UPDATE_TASK_LIST:
            return{
                ...state,
                tasks: state.tasks.map(elem => elem.id === action.payload.id ? action.payload : elem),
                editStatus:false,
                tituloFormulario:'Formulario Nuevo',
                taskEdit:{}
            }
        case STATUS_FORMULARIO:
            return{
                ...state,
                abrirFormularioStatus: action.payload,
                tituloFormulario:'Formulario Nuevo',
                taskEdit:{},
                editStatus:false,
            }
        case UPDATE_TASK:
            return{
                ...state,
                taskEdit:action.payload,
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
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks,action.payload]
            }
        case DELETE_TASK:
            return{
                ...state,
                // eslint-disable-next-line eqeqeq
                tasks: state.tasks.filter(elem => { return (elem.id != action.payload)})
        }
        default:
            return state;
    }
} 

export default TaskReducer;