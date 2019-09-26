import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CardMachine extends React.Component {
  render() {
    return (
      <View style={styles.tutorial}>
        <Text style={styles.tutorial_title}>IN PROGRESS!</Text>
        <Text>Tutorial for the card machine.</Text>
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
