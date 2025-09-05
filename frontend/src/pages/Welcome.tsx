import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h1>Welcome to Learn-Learn!</h1>
        <p>This is the welcome page.</p>
        <div style={{ marginTop: '2rem' }}>
            <Link to="/signin" style={{ marginRight: '1rem' }}>Sign In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    </div>
);

export default Welcome;
