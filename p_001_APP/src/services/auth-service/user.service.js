import { BASE_API_URL } from '../../constants';

export class UserService {
    getCurrentUser() {
        const sToken = localStorage.getItem('token');
        return fetch(BASE_API_URL + '/user', {
            headers: new Headers({
                'authorization': 'JWT ' + sToken,
                'Content-Type': 'application/json'
            })

        }).then(res => res.json());
    }
}