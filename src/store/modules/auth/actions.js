import { SET_TOKEN, SET_USER } from "./actionTypes"
import baseAxios from "../../../plugins/axios";
import {APIAuthenticateUser} from '../../../api/authentication';

export const setUser = (data)=>{
    return {
        type: SET_USER,
        payload: data
    }
}

export const setToken = (data)=>{
    return {
        type: SET_TOKEN,
        payload: data
    }
}

const setAuthorizationHeader = (token) => {
    baseAxios.defaults.headers.common = {
        ...baseAxios.defaults.headers.common,
        Authorization: 'Bearer ' + (token),
    }
}

const deleteAuthorizationHeader = () => {
    delete baseAxios.defaults.headers.common.Authorization
}

const setTokenToLocalStorage = (data)=>{
    localStorage.setItem('token', data);
}

const setUserToLocalStorage = (data)=>{
    localStorage.setItem('user', JSON.stringify(data));
}

export const getToken = (data)=>{
    return localStorage.getItem('token') ?? null;
}

export const getUser = (data)=>{
    return JSON.parse(localStorage.getItem('user') ?? '');
}

export const authenticateUser = (user)=>async (dispatch) => {
    const res = await APIAuthenticateUser(user);
    setTokenToLocalStorage(res.data.token);
    setUserToLocalStorage(res.data.user);
    dispatch(setUser(res.data.user));
    dispatch(setToken(res.data.token));
    setAuthorizationHeader(res.data.token);
}


export const logout = ()=>dispatch=>{
    localStorage.clear();
    deleteAuthorizationHeader();
    dispatch(setUser(null));
    dispatch(setToken(null));
}