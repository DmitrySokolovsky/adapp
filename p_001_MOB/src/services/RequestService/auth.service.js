import axios from 'axios';
import { BASE_API_URL } from '../../consts/urls.js';

export class AuthService {
    static getToken(userData) {
        return axios.post(BASE_API_URL + 'login',
        {
            name: userData.name,
            password: userData.password
        })
        .then(response => response.data).catch(err => console.log(err));
    }

    static getCustomerDataWithToken(token) {
        return axios.post(BASE_API_URL + 'auth',
            { token: token }
        ).then(response => response.data).catch(err => console.log(err)).catch(err => console.log(err));
    }
}