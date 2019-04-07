import React from 'react';
import { TopicService } from '../../services';

export class TopicView extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            topics: []
        };

        this.oTopicService = new TopicService();
    }
    componentDidMount() {
        this.oTopicService.getTopics(this.props.match.params.category);
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}