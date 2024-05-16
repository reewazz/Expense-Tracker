import { PostRequest } from "../plugins/http"

export const APIAuthenticateUser = (data)=>{
    return PostRequest('/user/login', {
        username: data.username,
        password: data.password
    })
}