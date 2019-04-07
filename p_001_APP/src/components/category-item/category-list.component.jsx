import React from 'react';
import {CategoryCard} from './category-item.component';

import { TopicService } from '../../services';

export class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.oTopicService = new TopicService();

        this.state = {
            open: false,
            name: ''
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }
    
    handleClose = () => {
        this.setState({ open: false });
    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = () => {
        let params = {
            id: 1,
            name: this.state.name
        }
        this.oTopicService.addTopic(params)
            .then(() => {
                console.log('Done')
                this.setState({ open: false })});
    }

    render() {
        const { categories } = this.props;
        return (
            <React.Fragment>
                {
                    categories.length ? categories.map((item) => {
                        return <CategoryCard key={item.id} cardData={item}/>
                    }) : null
                }
            </React.Fragment>
        );
    }
}
