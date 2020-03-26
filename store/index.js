import { combineReducers } from 'redux';
import config from './reducers/config'
import user from './reducers/user'
import createImovel from './reducers/createImovel'

export default combineReducers({
    config,
    user,
    createImovel
})