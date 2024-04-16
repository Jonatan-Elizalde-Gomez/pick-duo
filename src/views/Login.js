import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (input === 'machape') {
            localStorage.setItem('authToken', 'verified');
            navigate('/home');
        } else {
            alert('Palabra clave incorrecta');
        }
    };

    return (
        <div>
            <input type="password" value={input} onChange={e => setInput(e.target.value)} placeholder="Ingrese palabra clave" />
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
};

export default Login;