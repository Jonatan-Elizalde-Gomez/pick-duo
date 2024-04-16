// Verifica si el usuario está autenticado
export const isAuthenticated = () => {
    return localStorage.getItem('authToken') === 'verified';
};

// Realiza el proceso de "login"
export const login = (clave, callback) => {
    if (clave === 'machape') {
        localStorage.setItem('authToken', 'verified');
        callback(true);
    } else {
        callback(false);
    }
};

// Cierra la sesión del usuario
export const logout = (callback) => {
    localStorage.removeItem('authToken');
    callback();
};
