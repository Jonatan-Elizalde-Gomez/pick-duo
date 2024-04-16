    import React from 'react';
    import { Redirect } from 'react-router-dom';

    const AuthWrapper = ({ children }) => {
        const isAuth = localStorage.getItem('authToken') === 'verified';

        if (!isAuth) {
            return <Redirect to="/login" />;
        }

        return children;
    };

    export default AuthWrapper;