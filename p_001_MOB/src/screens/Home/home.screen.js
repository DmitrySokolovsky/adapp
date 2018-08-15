import React from 'react';
import { View, Text } from 'react-native';
import { authUser, setUserToken } from '../../store/actions';
import {connect} from 'react-redux';
import { AuthService } from '../../services/RequestService';

export class HomeScreenComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AuthService.getCustomerDataWithToken(this.props.userToken).then((response) => console.log("321321321", response));
        console.log(this.props.userToken);
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
    let userToken = state.auth.userToken;
    return {
        navRouter,
        storage,
        userData,
        userToken
    };
};

const mapDispatchToProps = (dispatch) => ({
    authUser: (creds) => {
        dispatch(authUser(creds));
    },
    setUserToken: (token) => {
        dispatch(setUserToken(token));
    }
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);