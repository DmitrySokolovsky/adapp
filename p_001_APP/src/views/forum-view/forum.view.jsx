import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../store/actions';
import { Header, MainSpacer, SideBar } from '../../components';
import './styles.css';

class _ForumView extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Header />
                <MainSpacer />
                <div className="main-content">
                    <SideBar/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
};

const mapDispatchToProps = {
    getCurrentUser
};

export const ForumView = connect(mapStateToProps, mapDispatchToProps)(_ForumView);