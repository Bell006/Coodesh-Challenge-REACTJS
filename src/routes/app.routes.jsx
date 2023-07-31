import { Routes, Route } from 'react-router-dom';

import { Upload } from './../pages/upload/index.jsx';
import { Results } from './../pages/Results/index.jsx';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Upload/>}  />
            <Route path="/Results" element={<Results/>}  />
        </Routes>
    );
}