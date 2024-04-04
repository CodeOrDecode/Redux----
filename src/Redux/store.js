import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { todoreducer } from "./Todo/todoreducer";
import { middleware } from "../Middleware/middleware";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const rootreducer=combineReducers({
    todo:todoreducer
})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk));