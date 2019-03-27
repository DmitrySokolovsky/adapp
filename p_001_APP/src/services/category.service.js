import { BASE_API_URL } from '../constants';

export class CategoryService {
    getCategories() {
        const sToken = localStorage.getItem('token');
        return fetch(BASE_API_URL + '/categories', {
            headers: new Headers({
                'authorization': 'JWT ' + sToken,
                'Content-Type': 'application/json'
            })

        }).then(res => res.json());
    }
}