import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NoAuth } from '../../components';
import {connect} from 'react-redux';
import {
    setNavigation
} from '../../store/actions';

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null
        };
    }

    componentDidMount() {
        let navObject = this.props.navigation;
        this.props.setNavigation(navObject);
    }

    render() {
        let userData = this.state.userData;

        return (
            <View style={mainStyles.mainContainer}>
                {
                    userData ? '' : <NoAuth />
                }
                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    let navRouter = state.nav.navRouter;
    let userData = state.auth.userData;
    return {
        navRouter,
        userData
    };
};

const mapDispatchToProps = (dispatch) => ({
    setNavigation: (value) => {
        dispatch(setNavigation(value));
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