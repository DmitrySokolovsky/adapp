import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, getCategories } from '../../store/actions';
import { Header, MainSpacer, SideBar, CategoryList } from '../../components';
import { Route, Switch } from 'react-router-dom';
import './styles.css';

class _ForumView extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
        this.props.getCategories();
        console.log(this.props);
    }

    render() {
        const { categories } = this.props;
        return (
            <div>
                <Header />
                <MainSpacer />
                <div className="main-content">
                    <SideBar/>
                    <div className="tables">
                    <Switch>
                        <Route exact path="/forum" render={props => <CategoryList categories={categories}/>}/>
                        <Route path="/forum/:category" render={props => <div>Hello</div>}/>
                    </Switch>
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        categories: state.categories.categories,
    }
};

const mapDispatchToProps = {
    getCurrentUser,
    getCategories
};

export const ForumView = connect(mapStateToProps, mapDispatchToProps)(_ForumView);