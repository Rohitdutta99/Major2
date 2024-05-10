import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Autolocated from "./Autolocated";
import LocationDisplay from "./Location_display";

function App(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/locate" element={<Autolocated />}/>
                <Route path="/Location_display" element={<LocationDisplay />}/>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;