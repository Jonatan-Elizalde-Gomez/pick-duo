import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import Home from './views/Home';
import Login from './views/Login';
import Bienvenida from './components/Bienvenida';
import Filtros from './components/Filtros';
import Resultados from './views/Resultados';

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/bienvenida" element={<Bienvenida />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="home" element={<Home />} />
                <Route path="filtros" element={<Filtros />} />
                <Route path="resultados" element={<Resultados />} />
            </Route>
            <Route path="*" element={<Navigate to="/bienvenida" replace />} />
        </Routes>
    );
}

export default AppRoutes;
