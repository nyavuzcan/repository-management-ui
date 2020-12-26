import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from "redux-logger";
import rootReducer from '../reducers/rootReducer';

//CENTER REDUX STORE FOR STORE STATES

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;