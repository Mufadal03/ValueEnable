import { applyMiddleware, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as authReducer } from "./authRedux/reducer"
export const store = legacy_createStore(authReducer,applyMiddleware(thunk))