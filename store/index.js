import { combineReducers } from 'redux';
import config from './reducers/config'
import user from './reducers/user'

export default combineReducers({
    config,
    user
})