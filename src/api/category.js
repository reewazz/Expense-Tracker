import { GetRequest } from "../plugins/http"

export const APIGetCategories = ()=>{
    return GetRequest('/category');
}