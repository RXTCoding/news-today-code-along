import {createStore,applyMiddleware} from 'redux'
import hackerNewsReducer from './ducks/hackerNewsReducer'
import promiseMiddleware from "./ducks/hackerNewsReducer"



export default createStore (hackerNewsReducer, applyMiddleware(promiseMiddleware));

