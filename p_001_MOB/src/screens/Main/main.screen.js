import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NoAuth } from '../../components';
import Storage from 'react-native-storage';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native";
import {
    setNavigation,
    setStorage,
    setUserToken,
    authUser
} from '../../store/actions';
import { HomeScreen } from '../Home/home.screen';
import { AuthService } from '../../services';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
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

        appStorage.load({
            key: 'token',
            id: '01'
        }).then(ret => {
            console.log("ret321321321321321");
            return ret;
        }).then((ret) => {
            if (ret) {
                AuthService.getCustomerDataWithToken(ret).then(result => {
                    this.props.authUser(result);
                    this.setState({
                        isLoading: false
                    });
                });
            }
        })
        .catch(err => {
            this.setState({
                isLoading: false
            });
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={mainStyles.mainContainer}>
                    <Text style={mainStyles.loadingLabel}>...LOADING</Text>
                </View>
            );
        }
        return (
            <View style={mainStyles.mainContainer}>
                {
                    this.props.userData ? <HomeScreen /> : <NoAuth />
                }
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
    setNavigation: (value) => {
        dispatch(setNavigation(value));
    },
    setStorage: (value) => {
        dispatch(setStorage(value));
    },
    setUserToken: (token) => {
        dispatch(setUserToken(token));
    },
    authUser: (creds) => {
        dispatch(authUser(creds));
    },
});

const mainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    loadingLabel: {
        fontSize: 40
    }
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);