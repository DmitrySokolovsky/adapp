import React, {
    Component
} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,ToastAndroid, TextInput } from 'react-native';
import {connect} from 'react-redux';
// import Storage from 'react-native-storage';
// import { AsyncStorage } from 'react-native';

import { setUserToken } from '../../store/actions';

class NoAuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };

        // this.storage = new Storage({
        //     size: 1000,
        //     storageBackend: AsyncStorage,
        //     defaultExpires: 1000 * 3600 * 24,
        //     enableCache: true
        // });
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
            }).then((ret) => /*this.props.setUserToken(ret)*/ console.log(ret))
              .catch((err) => console.log(err));
        }).catch(err => console.log(err));
    }

    componentWillMount() {
        // this.props.storage.load({
        //     key: 'token',
        //     id: '01'
        // }).then(ret => {
        //     if (ret) {
        //         console.log("NoAuthComponent -> ", ret)
        //         this.props.setUserToken(ret);
        //         this.props.navRouter.navigate('Home');
        //     }
        // });
    }

    /* *************************************************************************** */

    // setVal() {
    //     var userA = {
    //         name: 'Andrew321321321'
    //     };
        
    //     this.storage.save({
    //         key: 'user',  // Note: Do not use underscore("_") in key!
    //         id: '1001',	  // Note: Do not use underscore("_") in id!	
    //         data: userA,
    //         expires: 1000 * 60	 
    //     });
    // }

    // getVal() {
    //     this.storage.load({
    //         key: 'user',
    //         id: '1001'
    //     }).then(ret => {
    //         console.log(ret);
    //         this.setState({
    //             message: ret.name
    //         });
    //         console.log(ret.userid);
    //     }).catch(err => {
    //         console.warn(err.message);
    //         // switch (err.name) {
    //         //     case 'NotFoundError':
    //         //         // TODO;
    //         //         break;
    //         //     case 'ExpiredError':
    //         //         // TODO
    //         //         break;
    //         // }
    //     });
    // }

    /* *************************************************************************** */

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

                {/* 
                <View>
                    <Text>{this.state.message}</Text>
                </View>
                <TouchableOpacity onPress={() => this.setVal()}>
                    <View style={noAuthStyle.loginBtn}>
                        <Text style={noAuthStyle.text}>SET</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.getVal()}>
                    <View style={noAuthStyle.loginBtn}>
                        <Text style={noAuthStyle.text}>GET</Text>
                    </View>
                </TouchableOpacity>
                {/* ****************************************** */}

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
    // authUser: (creds) => {
    //     dispatch(authUser(creds));
    // },
    setUserToken: (token) => {
        dispatch(setUserToken(token));
    }
});

export const NoAuth = connect(mapStateToProps, mapDispatchToProps)(NoAuthComponent);