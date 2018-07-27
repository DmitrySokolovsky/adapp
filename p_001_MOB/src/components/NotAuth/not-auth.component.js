import React, {
    Component
} from 'react';
import { View, StyleSheet, Text, TouchableHighlight,ToastAndroid } from 'react-native';
import {connect} from 'react-redux';

class NoAuthComponent extends Component {
    componentDidMount() {
        if(this.props) {
            this.props;
        }
    }

    onLoginPress() {
        this.props.navRouter.navigate('Login');
    }

    render() {
        return (
            <View style={noAuthStyle.noAuthContainer}>
                <Text style={noAuthStyle.text}>You are not logged in</Text>
                <TouchableHighlight onPress={() => this.onLoginPress()}>
                    <View style={noAuthStyle.loginBtn}>
                        <Text style={noAuthStyle.text}>LOG IN</Text>
                    </View>                   
                </TouchableHighlight>
                <Text style={noAuthStyle.text}>...Or</Text>
                <TouchableHighlight>
                    <View style={noAuthStyle.loginBtn}>
                        <Text style={noAuthStyle.text}>Register</Text>
                    </View>                   
                </TouchableHighlight>                 
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
    return {
        navRouter
    };
};

export const NoAuth = connect(mapStateToProps)(NoAuthComponent);