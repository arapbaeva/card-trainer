import React from 'react';
import '../App.css';
import {Route, Routes} from "react-router-dom";
import {Profile} from "../pages/Profile/Profile";
import {Login} from "../pages/Login/Login";
import {RecoveryPassword} from "../pages/RecoveryPassword/RecoveryPassword";
import {NewPassword} from "../pages/NewPassword/NewPassword";
import {NotFound} from "../pages/NotFound/NotFound";
import {Registration} from "../pages/Registration/Registration";

function App() {
    return (
        <div className="App">
     <Routes>
       <Route path={'/'} element={<Profile/>}></Route>
       <Route path={'/home'} element={<Profile/>}></Route>
       <Route path={'/registration'} element={<Registration/>}></Route>
       <Route path={'/login'} element={<Login/>}></Route>
       <Route path={'/recovery-password'} element={<RecoveryPassword/>}></Route>
       <Route path={'/new-password'} element={<NewPassword/>}></Route>
       <Route path={'/*'} element={<NotFound/>}></Route>
     </Routes>
        </div>
    );
}

export default App;
