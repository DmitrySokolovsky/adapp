import { Provider } from 'react-redux';
import { tfStore } from './src/store';
import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import { Main, HomeScreen } from './src/screens';
import { LogInForm } from './src/components/LogInForm/login-form.component';

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
const RootStack = createStackNavigator(
    {
        Main: { screen: Main },
        Login: { screen: LogInForm },
        Home: { screen: HomeScreen }
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
