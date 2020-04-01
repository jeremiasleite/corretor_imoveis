import { combineReducers } from 'redux';
import config from './reducers/config'
import user from './reducers/user'
import createImovel from './reducers/createImovel'
import addImagens from './reducers/addImagens'
import atualizarImovel from './reducers/atualizarImovel'

export default combineReducers({
    config,
    user,
    createImovel,
    addImagens,
    atualizarImovel
})