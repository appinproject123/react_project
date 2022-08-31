import { login } from "../api/Api";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setTokenData } from "../constant/Constant";
export default function Login() {
    const [form, setForm] = useState();
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(form)
        const response = await login(form)
        console.log(response)
        if (response.status == "success") {
            toast.success(response.message);
            setTokenData(response)
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        }
        else {
            toast.error(response.message)
        }
    }
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit}>

                <input type="email" name="email" onChange={handleChange} /><br></br>
                <input type="password" name="password" onChange={handleChange} /><br></br>
                <input type="submit" value="Login Karo Na"></input>
                <Link to="/signup">Signup Kar lo</Link>
            </form>

        </>
    )
}