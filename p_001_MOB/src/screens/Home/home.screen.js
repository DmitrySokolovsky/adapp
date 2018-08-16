import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import {connect} from 'react-redux';
import {
    Products,
    Profile
} from '../../components';

class HomeScreenComponent extends React.Component {
    constructor(props) {
        super(props);

       
    }

    render() {
        return (
            <View>
                <Text>TODO: add navigations</Text>
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

export const HomeScreen = connect(mapStateToProps)(HomeScreenComponent);