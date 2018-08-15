import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { logIn } from '../../store/actions';
import { AuthService } from '../../services/RequestService';

class LogInFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    componentDidMount() {
        console.log(this.props);
    }

    onLoginPress() {
        const { login, password } = this.state;
        const userCreds = {
            name: login,
            password: password
        };

        // this.props.logIn({
        //     name: login,
        //     password: password
        // });
        // console.log(this.props);

        AuthService.getToken(userCreds).then(response => {
            this.props.storage.save({
                key: 'token',
                id: '01',	
                data: response.token,
                expires: 1000 * 600
            }).then(() => this.props.navRouter.navigate('Home'))
              .catch((err) => console.log(err));
        }).catch(err => console.log(err));
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
    let userToken = state.auth.userToken;
    let navRouter = state.nav.navRouter;
    let storage = state.storage.storage;
    return {
        userData,
        navRouter,
        userToken,
        storage
    };
};

const mapDispatchToProps = (dispatch) => ({
    logIn: (creds) => {
        dispatch(logIn(creds));
    }
});

export const LogInForm = connect(mapStateToProps, mapDispatchToProps)(LogInFormComponent);