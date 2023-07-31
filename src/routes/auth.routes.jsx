import { Routes, Route } from 'react-router-dom';

import { SignIn } from './../pages/signIn/index.jsx';
import { SignUp } from './../pages/signUp/index.jsx';

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}  />
            <Route path="/SignUp" element={<SignUp/>}  />
        </Routes>
    );
}