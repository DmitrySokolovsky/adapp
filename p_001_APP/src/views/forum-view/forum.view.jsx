import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, getCategories } from '../../store/actions';
import { Header, MainSpacer, SideBar, CategoryList } from '../../components';
import { Route, Switch } from 'react-router-dom';
import { TopicView } from '../';
import './styles.css';

class _ForumView extends React.Component {
    componentDidMount() {
        // this.props.getCurrentUser();
        // this.props.getCategories();
        console.log(this.props);
    }

    render() {
        const { categories } = this.props;
        return (
            <div>
                <Header />
                {/* <MainSpacer />
                <div className="main-content">
                    <SideBar/>
                    <div className="tables">
                    <Switch>
                        <Route exact path="/forum" render={props => <CategoryList categories={categories}/>}/>
                        <Route path="/forum/category/:category" component={TopicView}/>
                    </Switch>
                    </div>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // user: state.user.user,
        user: {
            id: 1,
            name: 'Test'
        },
        // categories: state.categories.categories,
        categories: [{"id":2,"name":"Продать","description":"Здесь продают","tech_name":"sell","items":null},{"id":1,"name":"Купить","description":"Здесь покупают","tech_name":"buy","items":[{"id":36,"name":"Куплю Sonor DP 472 R"},{"id":35,"name":"mdb2"},{"id":34,"name":"Аноним"}]},{"id":3,"name":"Звукозапись","description":"Вопросы по звукозаписи","tech_name":"record","items":null}],
    }
};

const mapDispatchToProps = {
    getCurrentUser,
    getCategories
};

export const ForumView = connect(mapStateToProps, mapDispatchToProps)(_ForumView);