import Signup from "./auth/Signup";
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Login from "./auth/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import Auth from "./auth/Auth";
export default function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="signup" element={<Signup />}/>
                    <Route path="dashboard" element={<Auth><Dashboard /></Auth>}/>
                </Routes>
            </Router>
        </>
    )
}