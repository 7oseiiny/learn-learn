import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Welcome: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    useEffect(() => {
        const checkLogin = () => setIsLoggedIn(!!localStorage.getItem('token'));
        window.addEventListener('storage', checkLogin);
        window.addEventListener('authChange', checkLogin);
        return () => {
            window.removeEventListener('storage', checkLogin);
            window.removeEventListener('authChange', checkLogin);
        };
    }, []);
    return (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h1>Welcome to Learn-Learn!</h1>
            <p>This is the welcome page.</p>
            {!isLoggedIn && (
                <div style={{ marginTop: '2rem' }}>
                    <Link to="/signin" style={{ marginRight: '1rem' }}>Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )}
        </div>
    );
};

export default Welcome;
