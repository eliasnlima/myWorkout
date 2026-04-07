import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import NewWorkout from "../pages/NewWorkout";
import Workout from "../pages/Workout";
import Serie from "../pages/Series";
import NewUser from "../pages/NewUser";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/Dashboard" element={<PrivateRoute>< Dashboard/></PrivateRoute>} />
                <Route path="/NewWorkout" element={<PrivateRoute><NewWorkout /></PrivateRoute>} />
                <Route path="/Workout/:id" element={<PrivateRoute><Workout /></PrivateRoute>} />
                <Route path="/serie/:id" element={<PrivateRoute><Serie /></PrivateRoute>} />
                <Route path="/NewUser" element={< NewUser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;