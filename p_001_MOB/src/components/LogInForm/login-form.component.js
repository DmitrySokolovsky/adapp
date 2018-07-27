import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { logIn } from '../../store/actions';

class LogInFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    onLoginPress() {
        const { login, password } = this.state;
        this.props.logIn({
            name: login,
            password: password
        });
    }

    render() {
        return (
            <View style={logInFormStyle.loginContainer}>
                <TextInput placeholder="login" style={logInFormStyle.loginTextInput} onChangeText={(text) => this.setState({ login: text })} />
                <TextInput placeholder="password" style={logInFormStyle.loginTextInput} onChangeText={(text) => this.setState({ password: text })}/>
                <TouchableOpacity onPress={() => this.onLoginPress()}>
                    <Text style={logInFormStyle.loginBtn}>LOG IN</Text>
                </TouchableOpacity>                
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
    },
    loginTextInput: {
        width: 200,
        margin: 10,
        fontSize: 20
    },
    loginBtn: {
        fontSize: 25,
        marginTop: 100,
        borderColor: 'black'
    }
});

const mapStateToProps = (state) => {
    let userData = state.auth.userData;
    return {
        userData
    };
};

const mapDispatchToProps = (dispatch) => ({
    logIn: (creds) => {
        console.log(creds);
        dispatch(logIn(creds));
    }
});

export const LogInForm = connect(mapStateToProps, mapDispatchToProps)(LogInFormComponent);