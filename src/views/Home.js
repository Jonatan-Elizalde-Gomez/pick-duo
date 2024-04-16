import React from 'react';
import { useNavigate } from "react-router-dom";
import { logout } from '../utils/auth';  // Asegúrate de que la ruta es correcta


function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(() => {
            navigate('/login');  // Redirige al usuario a la página de login
        });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1>Bienvenido a la página principal</h1>
            <p>Has ingresado correctamente al sistema.</p>
            <button onClick={handleLogout} style={{ marginTop: '20px', fontSize: '16px', padding: '10px 20px', cursor: 'pointer' }}>
                Cerrar sesión
            </button>
        </div>
    );
}

export default Home;