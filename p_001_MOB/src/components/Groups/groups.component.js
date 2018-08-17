import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export class Group extends React.Component {
    static nanavigationOptions = {
        drawerLabel: 'My Groups'
    };

    render() {
        return (
            <View>
                <Text>Groups</Text>
            </View>
        );
    }
}
