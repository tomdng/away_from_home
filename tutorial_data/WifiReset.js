import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class WifiReset extends React.Component {
  render() {
    return (
      <View style={styles.tutorial}>
        <Text style={styles.tutorial_title}>IN PROGRESS!</Text>
        <Text>Tutorial for resetting the wifi router.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tutorial_title: {
    fontSize: 30,
    textAlign: 'center'
  },
  tutorial: {
    alignItems: 'center'
  }
});