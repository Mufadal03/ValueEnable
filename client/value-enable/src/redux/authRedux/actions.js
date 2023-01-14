import axios from "../../myAxios"
import * as data from "./actionTypes"


export const signUp = (payload) => dispatch => {
    dispatch({ type: data.SIGNUP_REQUEST })
    return axios.post("/user/signup", payload).then((r) => {
        console.log(r.data)
        return dispatch({type:data.SIGNUP_SUCCESS})
    }).catch((e) => {
        console.log(e)
        return dispatch({ type: data.SIGNUP_FAILURE })
    })
}


export const LogIn = (creds) => dispatch => {
    dispatch({ type: data.LOGIN_REQUEST })
    return axios.post("/user/login", creds)
        .then((r) => {
            console.log(r.data)
            return dispatch({ type: data.LOGIN_SUCCESS ,payload:r.data.token})
        }).catch((e) => {
            console.log(e)
            return dispatch({ type: data.LOGIN_FAILURE })
    })
}

export const LogOut = () => dispatch=>{
    dispatch({type:data.LOGOUT_REQUEST})
}