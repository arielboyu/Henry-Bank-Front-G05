import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers/Index'
import thunk from 'redux-thunk'

export default Store = () => {
    let store = createStore(Reducers, applyMiddleware(thunk))
    return store
}