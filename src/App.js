import Signup from "./auth/Signup";
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Login from "./auth/Login";
export default function App()
{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="signup" element={<Signup />}/>
                </Routes>
            </Router>
        </>
    )
}