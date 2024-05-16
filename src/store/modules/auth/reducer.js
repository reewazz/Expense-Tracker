import { SET_TOKEN, SET_USER } from "./actionTypes"


const initialState= {
    user: null,
    token: null
}

export const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}