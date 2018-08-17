import React from 'react';
import { View, StyleSheet, ToolbarAndroid } from 'react-native';
import ActionBar from 'react-native-action-bar';
import Icon from 'react-native-vector-icons/Foundation';
import {connect} from 'react-redux';
import {
    MainTabStack
} from '../../instances/main.routing';

class HomeScreenComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    
    onToggleMenu = () => {
        this.props.homeRouter.toggleDrawer();
    }

    render() {
        return (
            <View style={homeStyles.mainHomeContainer}>
                {/* <ToolbarAndroid
                    title="Team Feeder"
                    onActionSelected={()=>this.onToggleMenu()}
                    style={homeStyles.toolkit}
                >
                    <Icon.ToolbarAndroid name="plus" size={25} color="red"/>
                </ToolbarAndroid> */}

                <ActionBar
                    containerStyle={homeStyles.toolkit}
                    leftIconName={'menu'}
                    onLeftPress={() => this.onToggleMenu()}
                    title="TEAM FEEDER"
                    rightIcons={[
                        {
                            name: 'plus',
                            onPress: () => console.log('Right Plus !'),
                        },
                        {
                            name: 'flag',
                            badge: '3',
                            onPress: () => console.log('Right Plus !'),
                        },
                    ]}
                />
                <MainTabStack/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    let navRouter = state.nav.navRouter;
    let homeRouter = state.nav.homeRouter;
    let storage = state.storage.storage;
    let userData = state.auth.userData;
    return {
        navRouter,
        storage,
        userData,
        homeRouter
    };
};

const homeStyles = StyleSheet.create({
    mainHomeContainer: {
        flex: 1,
        width: '100%',
    },
    toolkit: {
        width: "100%",
        height: 40,
        backgroundColor: 'black'
    },
    rightText: {
        color: 'white'
    }
});

export const HomeScreen = connect(mapStateToProps)(HomeScreenComponent);