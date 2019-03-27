import React from 'react';
import {CategoryCard} from './category-item.component';

export class CategoryList extends React.Component {
    render() {
        const { categories } = this.props;
        return (
            <React.Fragment>
                {
                    categories.map((item) => {
                        return <CategoryCard name={item.name} description={item.description}/>
                    })
                }
            </React.Fragment>
        );
    }
}