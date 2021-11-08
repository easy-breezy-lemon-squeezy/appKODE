import usersReducer from "./users-reducer";
import {applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";

const {createStore} = require("redux");

let reducers = combineReducers({
    usersPage: usersReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;