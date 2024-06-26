import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Autolocated from "./Autolocated";
import LocationDisplay from "./Location_display";
import Login from "./Login";
import SignUp from "./SignUp";
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/home" element={<Homepage />}/>
                <Route path="/locate" element={<Autolocated />}/>
                <Route path="/Location_display" element={<LocationDisplay />}/>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;