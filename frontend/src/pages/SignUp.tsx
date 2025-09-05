

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../api/auth';

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await signUp(name, email, pass);
            setSuccess('Sign up successful! You can now sign in.');
            setTimeout(() => navigate('/signin'), 1500);
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Sign up failed');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h1>Sign Up</h1>
            <form style={{ display: 'inline-block', marginTop: '2rem' }} onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{ marginBottom: '1rem', padding: '0.5rem' }}
                    />
                </div>
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
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        style={{ marginBottom: '1rem', padding: '0.5rem' }}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
            {success && <div style={{ color: 'green', marginTop: '1rem' }}>{success}</div>}
            <div style={{ marginTop: '1rem' }}>
                <span>Already have an account? </span>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    );
};

export default SignUp;
