import {DECREASE_COUNT, INCREASE_COUNT, SET_COUNT } from './actionTypes';

export const increaseCounter = ()=>{
    return {
        type: INCREASE_COUNT
    }
}

export const decreaseCounter = ()=>{
    return {
        type: DECREASE_COUNT
    }
}

export const setCounter = (data)=>{
    return {
        type: SET_COUNT,
        payload: data
    }
}