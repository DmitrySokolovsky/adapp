import React, {
    Component
} from 'react';
import { View, StyleSheet, Text, TouchableHighlight,ToastAndroid } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class NoAuth extends Component {
    componentDidMount() {
        if(this.props) {
            this.props;
        }
    }

    onLoginPress() {
        this.props.navigation.navigate('Login');
    }

    render() {
       // const { navigate } = this.props.navigation;
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