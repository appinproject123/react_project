import { signup } from "../api/Api";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup()
{
    const[form,setForm] = useState();
    const navigate = useNavigate();
    async function handleSubmit(event)
    {
        event.preventDefault();
       const response =  await signup(form)
       console.log(response)
       if(response.status == "success"){
        toast("signup succssfuylly");
        setTimeout(()=>{
            navigate("/")
        },2000)
           
       }
       else{
        toast.error(response.message)
       }
    }

    function handleChange(event)
    {
        setForm({...form,[event.target.name]:event.target.value})
    }
    return (
        <>
         <ToastContainer />
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange}/><br></br>
                <input type="email" name="email" onChange={handleChange} /><br></br>
                <input type="number" name="phone" onChange={handleChange}/><br></br>
                <input type="password" name="password" onChange={handleChange}/><br></br>
                <input type="submit" value="Signup Karo Na"></input>
            </form>
        
        </>
    )
}