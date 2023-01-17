import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="registration" element={<Registration />} />
        </Routes>
    );
}