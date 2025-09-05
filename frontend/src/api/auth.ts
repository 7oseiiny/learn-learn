import api from './axios';

export const signIn = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, pass: password });
    return response.data;
};

export const signUp = async (name: string, email: string, pass: string) => {
    const response = await api.post('/auth/register', {
        name,
        email,
        pass,
        role: 'admin',
    });
    return response.data;
};
