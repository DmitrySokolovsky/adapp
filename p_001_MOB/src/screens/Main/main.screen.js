import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NoAuth } from '../../components';

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null
        };
    }

    render() {
        let userData = this.state.userData;

        return (
            <View style={mainStyles.mainContainer}>
                {
                    userData ? '' : <NoAuth/>
                }
                
            </View>
        );
    }
}

const mainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#999'
    }
});