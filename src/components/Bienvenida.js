import React from 'react';
import { useNavigate } from 'react-router-dom';

function Bienvenida() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Holi amorcito</h1>
      <p className="text-xl text-gray-700 mb-6">TE AMO MUCHO</p>
      <button
        onClick={() => navigate('/filtros')}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Comenzar
      </button>
    </div>
  );
}

export default Bienvenida;
