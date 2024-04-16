import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bienvenida from './components/Bienvenida';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/bienvenida" element={<Bienvenida />} />
    </Routes>
  );
}

export default AppRoutes;
