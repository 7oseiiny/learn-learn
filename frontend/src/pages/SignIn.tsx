
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../api/auth';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password);
            navigate('/');
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Sign in failed');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h1>Sign In</h1>
            <form style={{ display: 'inline-block', marginTop: '2rem' }} onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ marginBottom: '1rem', padding: '0.5rem' }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{ marginBottom: '1rem', padding: '0.5rem' }}
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
            <div style={{ marginTop: '1rem' }}>
                <span>Don't have an account? </span>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default SignIn;
