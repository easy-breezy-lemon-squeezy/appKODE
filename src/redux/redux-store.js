import usersReducer from "./users-reducer";
import {applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware from "redux-thunk";

const {createStore} = require("redux");
let reducers = combineReducers({
    usersPage: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;