import api from './axios';

export const signIn = async (email: string, password: string) => {
    const response = await api.post('/auth/signin', { email, password });
    return response.data;
};

export const signUp = async (username: string, email: string, pass: string) => {
    const response = await api.post('/auth/register', {
        username,
        email,
        pass,
        role: 'admin',
    });
    return response.data;
};
