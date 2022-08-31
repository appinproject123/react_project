import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { getAllEmployee } from "../../api/Api";
import { getStorageData,getToken,destroyStorage } from "../../constant/Constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard =  ()=>{
    const [name,setName] = useState({}); 
    const [employee,setEmployee] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
            setName(getStorageData);
            toast.loading("Please wait ...",{autoClose:3000})
            getAllEmployee().then((res)=>{
                if(res.status == "success")
                    setEmployee(res.data);
                    
            })     
    },[])
    function logout()
    {
        destroyStorage()
        navigate("/") 
    }
    return(
        <>
        <ToastContainer />
        <h1>Welcome To dashboard {name.name}</h1>
        <button onClick={logout}>Logout</button>

        <table border={1}>
            <tbody>
            {
                employee.map((data,i)=>
                   <tr key={i}>
                    <td>{data.name}</td>
                   </tr>       
            )
            }
            </tbody>
        </table>
        </>
    )
}
export default Dashboard;