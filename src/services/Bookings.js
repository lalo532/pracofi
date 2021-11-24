import axios from 'axios';

export const getBookings = () => {
    const response = axios.get("http://localhost:3000/register", config);
    return response;
}