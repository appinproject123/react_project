import { useEffect } from "react";
import { getToken } from "../constant/Constant";
import { useNavigate } from "react-router-dom";
export default function Auth({children})
{
    const navigate = useNavigate();
    useEffect(()=>{
        if(!getToken())
        {
            navigate("/")
        }
    },[])

    return(
        <>
        {children}
        </>
    )
}