import { BASE_API_URL } from '../constants';

export class TopicService {
    addTopic(params) {
        const sToken = localStorage.getItem('token');
        console.log(params)
        return fetch(BASE_API_URL + '/topic', {
            method: 'POST',
            body: JSON.stringify({
                id: params.id,
                name: params.name
            }),
            headers: new Headers({
                'authorization': 'JWT ' + sToken,
                'Content-Type': 'application/json'
            })

        }).then((res) => console.log(res.json()));
    }

    getTopics(id) {
        const sToken = localStorage.getItem('token');
        return fetch(BASE_API_URL + `/categories/${id}`, {
            headers: new Headers({
                'authorization': 'JWT ' + sToken,
                'Content-Type': 'application/json'
            })

        }).then((res) => console.log(res));
    }
}