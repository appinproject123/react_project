import { getToken } from "../constant/Constant"
import { ApiRoute } from "../routes/ApiRoutes"
import { API_URL } from "./Url"
export const getAllEmployee = async()=>
{

}

export const  getAllData = async()=>
{

}

export const addEmployee =  async ()=> {

}


export const signup = async (signup_data)=>{
    const postHeader = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
        ,
        body:JSON.stringify(signup_data)
    }

    const response = await fetch(`${API_URL.AUTH_URL}${ApiRoute.auth_signup}`,postHeader)

    return await response.json();
}



export const login = async (login_data)=>{
    const postHeader = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
        ,
        body:JSON.stringify(login_data)
    }
    const response = await fetch(`${API_URL.AUTH_URL}${ApiRoute.auth_login}`,postHeader)
    return await response.json();
}