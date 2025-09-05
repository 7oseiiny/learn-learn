import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLogin = () => setIsLoggedIn(!!localStorage.getItem('token'));
        checkLogin();
        window.addEventListener('storage', checkLogin);
        window.addEventListener('authChange', checkLogin);
        return () => {
            window.removeEventListener('storage', checkLogin);
            window.removeEventListener('authChange', checkLogin);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
        } catch (e) { }
        localStorage.removeItem('token');
        sessionStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#f5f5f5', marginBottom: '2rem' }}>
            <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>Learn-Learn</h2>
            {isLoggedIn && (
                <button onClick={handleLogout} style={{ padding: '0.5rem 1rem' }}>Logout</button>
            )}
        </header>
    );
};

export default Header;
