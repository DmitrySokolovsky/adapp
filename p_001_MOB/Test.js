import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>JS465465464JSX</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderTopWidth: 1,
    borderTopColor: '#999',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  }
});