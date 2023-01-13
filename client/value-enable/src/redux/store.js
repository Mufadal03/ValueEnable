import { legacy_createStore } from "redux"
import { reducer as authReducer } from "./authRedux/reducer"
export const store = legacy_createStore(authReducer)