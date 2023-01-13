import * as data from "./actionTypes"
const initialState = {
    isLoading: false,
    isError: false,
    isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
    userData:null
}

export const reducer = (state = initialState, { type, payload })=>{
    switch (type) {
        case data.SIGNUP_REQUEST: {
            return {
                ...state,
                isLoading:true
            }
        }
        case data.SIGNUP_SUCCESS: {
            localStorage.setItem("isAuth",JSON.stringify(true))
            return {
                ...state,
                isAuth:true
            }
        }
        case data.SIGNUP_FAILURE: {
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

