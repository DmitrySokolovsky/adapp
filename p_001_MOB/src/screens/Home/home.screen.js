import React from 'react';
import { View, Text } from 'react-native';
import { authUser } from '../../store/actions';
import {connect} from 'react-redux';

export class HomeScreenComponent extends React.Component {
    componentDidMount() {
        //this.props.authUser();
    }

    render() {
        return (
            <View>
                <Text>LOGGED IN</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    let navRouter = state.nav.navRouter;
    let storage = state.storage.storage;
    let userData = state.auth.userData;
    return {
        navRouter,
        storage,
        userData
    };
};

const mapDispatchToProps = (dispatch) => ({
    authUser: (creds) => {
        dispatch(authUser(creds));
    }
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);