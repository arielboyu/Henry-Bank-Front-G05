import { createStore } from 'redux';
import Reducers from './reducers/Index'

const Store = () => {
    let store = createStore(
        Reducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default Store;