import { combineReducers } from 'redux'
import userReducer from "../reducers/user"
import accountReducer from "../reducers/account"

const Reducers = combineReducers({
user: userReducer,
account: accountReducer
});

export default Reducers;