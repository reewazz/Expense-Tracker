
import { combineReducers } from 'redux'
import { countReducer } from './modules/count/reducer'
import { authReducer } from './modules/auth/reducer'


export default combineReducers({
    countReducer,
    authReducer
})
