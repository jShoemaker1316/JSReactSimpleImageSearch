import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qf2DdhuY0OGrBojc0zynlhEStQQCGnEJvxP8K2otvcg'
    }
});