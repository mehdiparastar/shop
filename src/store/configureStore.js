import { createStore } from 'redux'
import counterReducer from '../reducers/counterReducer'

export default (defaultState) => {
    const store = createStore(counterReducer, defaultState)
    return store
}

