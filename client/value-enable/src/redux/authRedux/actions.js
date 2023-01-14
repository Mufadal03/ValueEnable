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

export const CreatePolicy = (payload) =>{
    axios.post("/policy/create", payload, {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
    }).then((r) => {
        console.log("POlicy Created",r.data)
    }).catch((e)=>console.log(e))
}