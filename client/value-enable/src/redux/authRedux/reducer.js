import * as data from "./actionTypes"
const initialState = {
    isLoading: false,
    isError: false,
    isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
    userData:null
}

export const reducer = (state = initialState, { type, payload })=>{
    switch (type) {
        case data.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading:true
            }
        }
        case data.LOGIN_SUCCESS: {
            localStorage.setItem("isAuth", JSON.stringify(true))
            localStorage.setItem("token", payload)
            return {
                ...state,
                isLoading: false,
                isAuth:true 
            }
        }
        case data.LOGIN_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading:false
            }
        }
        case data.LOGOUT_REQUEST: {
            localStorage.removeItem("isAuth")
            return {
                ...state,
                isAuth: false
            }
         }
        default:return state
    }
}

