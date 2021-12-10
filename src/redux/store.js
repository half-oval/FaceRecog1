import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import imageReducer from './reducers'

const rootReducer = combineReducers({imageReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk))