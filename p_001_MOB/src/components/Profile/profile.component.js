import React from 'react';
import { View, Text, Button } from 'react-native';

export class Profile extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Profile'
    };

    render() {
        return (
            <View>
                <Text>Profile</Text>
                {/* <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
                <Button
                    onPress={() => this.props.navigation.toggleDrawer()}
                    title="Menu"
                /> */}
            </View>
        );
    }
}