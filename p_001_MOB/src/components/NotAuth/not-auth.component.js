import React, {
    Component
} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,ToastAndroid } from 'react-native';
import {connect} from 'react-redux';
// import Storage from 'react-native-storage';
// import { AsyncStorage } from 'react-native';

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
        console.log(this.props);
        this.props.navRouter.navigate('Login');
    }

    componentWillMount() {
        this.props.storage.load({
            key: 'token',
            id: '01'
        }).then(ret => {
            if (ret) {
                this.props.navRouter.navigate('Home');
            }
        });
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
                <TouchableOpacity onPress={() => this.onLoginPress()}>
                    <View style={noAuthStyle.loginBtn}>
                        <Text style={noAuthStyle.text}>LOG IN</Text>
                    </View>                   
                </TouchableOpacity>
                <Text style={noAuthStyle.text}>...Or</Text>
                <TouchableOpacity onPress={() => process.stdout.write("hello")}>
                    <View style={noAuthStyle.loginBtn}>
                        <Text style={noAuthStyle.text}>Register</Text>
                    </View>
                </TouchableOpacity>

                {/* ****************************************** */}
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 20
    },
    textLogIn: {
        color: '#19B270'
    },
    loginBtn: {
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        width: 100,
        backgroundColor: 'white'
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

export const NoAuth = connect(mapStateToProps)(NoAuthComponent);