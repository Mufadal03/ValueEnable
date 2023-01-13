import axios from "../../myAxios"
import * as data from "./actionTypes"


export const signUp = (payload) => dispatch => {
    dispatch({ type: data.SIGNUP_REQUEST })
    axios.post("/user/signup", payload).then((r) => {
        dispatch({type:data.SIGNUP_SUCCESS})
        console.log(r.data)
    }).catch((e) => {
        dispatch({ type: data.SIGNUP_FAILURE })
        console.log(e)
    })
}


export const LogIn = (creds) => dispatch => {
    dispatch({ type: data.LOGIN_REQUEST })
    axios.post("/user/login", creds)
        .then((r) => {
            dispatch({ type: data.LOGIN_SUCCESS ,payload:r.data.token})
            console.log(r.data)
        }).catch((e) => {
            dispatch({ type: data.LOGIN_FAILURE })
            console.log(e)
    })
}