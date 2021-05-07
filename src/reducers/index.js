import {combineReducers} from 'redux';
import FormularioUsuarioReducer from './FormularioUsuarioReducer';
import UsuarioReducer from './UsuarioReducer';
import TaskReducer from './TaskReducer';

const rootReducer =  combineReducers({
     FormularioUsuarioReducer,
     UsuarioReducer,
     TaskReducer
});

export default rootReducer;