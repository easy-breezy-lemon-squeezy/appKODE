import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';

import usersReducer from "./users-reducer";
import {applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware from "redux-thunk";
const {createStore} = require("redux");

let reducers = combineReducers({
    usersPage: usersReducer
});
const persistenceConfigs = {
    key: "eventTracker",
    storage
};
const persistedReducer = persistReducer(persistenceConfigs,reducers);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistedStore  = persistStore(store);
export { persistedStore , store };