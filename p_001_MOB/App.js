import { Provider } from 'react-redux';
import { tfStore } from './src/store';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Main, HomeScreen } from './src/screens';
import { LogInForm } from './src/components/LogInForm/login-form.component';

const RootStack = createStackNavigator(
    {
        Main: {screen: Main},
        Login: {screen: LogInForm},
        Home: {screen: HomeScreen}
    },
    {
      headerMode: 'none'
    }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={tfStore}>
        <RootStack />
      </Provider>
    ) ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  test: {
    height: "15%",
    width: "100%",
    backgroundColor: "red"
  }
});
