import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            // If you have a backend logout endpoint, call it here:
            await api.post('/auth/logout');
        } catch (e) {
            // Ignore errors for demo
        }
        // Optionally clear local/session storage
        localStorage.clear();
        sessionStorage.clear();
        navigate('/');
    };
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#f5f5f5', marginBottom: '2rem' }}>
            <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>Learn-Learn</h2>
            <button onClick={handleLogout} style={{ padding: '0.5rem 1rem' }}>Logout</button>
        </header>
    );
};

export default Header;
