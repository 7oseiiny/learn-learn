import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Change to your backend URL
    withCredentials: true,
});

// Optional: Add interceptors for auth, error handling, etc.
// api.interceptors.response.use(
//   response => response,
//   error => {
//     // Handle errors globally
//     return Promise.reject(error);
//   }
// );

export default api;
