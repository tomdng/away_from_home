import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TutorialLayout from '../layout/TutorialLayout';

export default class CardMachine extends React.Component {
  render() {
    const test_array = ["hi", "bob", "bob is cool"];

    return (
      <View style={styles.tutorial}>
        <Text style={styles.tutorial_title}>IN PROGRESS!</Text>
        <Text>Tutorial for the card machine.</Text>
        <TutorialLayout tutorial={test_array}/>
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
