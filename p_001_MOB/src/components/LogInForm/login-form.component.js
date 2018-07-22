import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class LogInForm extends React.Component {
    render() {
        return (
            <View style={logInFormStyle.loginContainer}>

            </View>
        );
    }
}

const logInFormStyle = StyleSheet.create({
    loginContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});