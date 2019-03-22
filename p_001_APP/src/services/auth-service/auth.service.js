import axios from 'axios';
import { BASE_API_URL } from '../../constants';

export class AuthService {
    getToken(name, password) {
        return axios.post(BASE_API_URL + '/login', {
            name: name,
            password: password
        }).then(responce => this.saveToken(responce.data.token)).catch(err => alert(err));
    }

    saveToken(token) {
        let sToken = localStorage.getItem('token');
        if (!sToken) {
            localStorage.setItem('token', token);
        }
    }
} 