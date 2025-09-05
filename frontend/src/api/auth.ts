import api from './axios';

export const signIn = async (email: string, password: string) => {
    const response = await api.post('/auth/signin', { email, password });
    return response.data;
};

export const signUp = async (email: string, password: string) => {
    const response = await api.post('/auth/signup', { email, password });
    return response.data;
};
