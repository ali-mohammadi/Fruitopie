import React from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import HomePage from './pages/Home/Home';
import NotfoundPage from './pages/Error/Notfound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<NotfoundPage/>}/>
        </Routes>
    );
}

export default App;
