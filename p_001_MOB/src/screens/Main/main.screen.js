import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NoAuth } from '../../components';
import Storage from 'react-native-storage';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native";
import {
    setNavigation,
    setStorage
} from '../../store/actions';

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let navObject = this.props.navigation;
        this.props.setNavigation(navObject);

        const appStorage = new Storage({
            size: 500,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600,
            enableCache: true
        });

        this.props.setStorage(appStorage);

        // appStorage.load({
        //     key: 'token',
        //     id: '01'
        // }).then(ret => {
        //     if(ret.token) {
        //         navObject.naigate('Home');
        //     }
        // }).catch(err => {console.log("You're not auth-ed")});
    }

    render() {
        return (
            <View style={mainStyles.mainContainer}>
                <NoAuth />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    let navRouter = state.nav.navRouter;
    let storage = state.storage.storage;
    return {
        navRouter,
        storage
    };
};

const mapDispatchToProps = (dispatch) => ({
    setNavigation: (value) => {
        dispatch(setNavigation(value));
    },
    setStorage: (value) => {
        dispatch(setStorage(value));
    }
});

const mainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#999'
    }
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);