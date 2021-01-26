import { combineReducers } from 'redux'
import userReducer from "../reducers/user"

const Reducers = combineReducers({
user: userReducer,
})

export default Reducers;