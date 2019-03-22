import React from 'react';
import { UserService } from '../../services';

export class ForumView extends React.Component {
    constructor(props) {
        super(props);

        this.oUserService = new UserService();
    }
    componentDidMount() {
        this.oUserService.getCurrentUser().then(res => console.log(res)).catch(err => console.log(err));
    }

    render() {
        return (
            <div>Forum</div>
        );
    }
}