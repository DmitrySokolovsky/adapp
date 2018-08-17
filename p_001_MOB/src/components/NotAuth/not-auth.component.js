import React, {
    Component
} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import {connect} from 'react-redux';
import { AuthService } from '../../services';

import { setUserToken } from '../../store/actions';

class NoAuthComponent extends Component {
    constructor(props) {
        super(props);
    }

    onLoginPress() {
        const { login, password } = this.state;
        const userCreds = {
            name: login,
            password: password
        };

        console.log(userCreds);

        AuthService.getToken(userCreds).then(response => {
            console.log(response);
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
            <View style={noAuthStyle.noAuthContainer}>
                <Text style={noAuthStyle.text}>You are not logged in</Text>
                <View style={noAuthStyle.loginContainer}>
                    <TextInput placeholder="login" style={noAuthStyle.loginTextInput} onChangeText={(text) => this.setState({ login: text })} />
                    <TextInput placeholder="password" style={noAuthStyle.loginTextInput} onChangeText={(text) => this.setState({ password: text })}/>
                    <TouchableOpacity onPress={() => this.onLoginPress()}>
                        <Text style={noAuthStyle.loginBtn}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onLoginPress()}>
                        <Text style={noAuthStyle.loginBtn}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const noAuthStyle = StyleSheet.create({
    noAuthContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginTop: 40
    },
    textLogIn: {
        color: '#19B270'
    },
    loginBtn: {
        marginTop: 10,
        borderRadius: 20,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        backgroundColor: 'white',
        fontSize: 20,
        color: 'black'
    },
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
    }
});

const mapStateToProps = (state) => {
    let navRouter = state.nav.navRouter;
    let storage = state.storage.storage;
    let userData = state.auth.userData;

    return {
        navRouter,
        storage,
        userData,
    };
};

const mapDispatchToProps = (dispatch) => ({
    setUserToken: (token) => {
        dispatch(setUserToken(token));
    }
});

export const NoAuth = connect(mapStateToProps, mapDispatchToProps)(NoAuthComponent);