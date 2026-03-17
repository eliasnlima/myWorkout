import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/Dashboard" element={< Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;