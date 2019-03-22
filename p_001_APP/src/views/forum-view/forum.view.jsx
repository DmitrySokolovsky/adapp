import React from 'react';
import { UserService } from '../../services';

export class ForumView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: ''
            }
        };
        this.oUserService = new UserService();
    }
    componentDidMount() {
        this.oUserService.getCurrentUser().then(res => {
            this.setState({
                user: res
            });
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                user: {this.state.user.name}
            </div>
        );
    }
}