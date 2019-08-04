import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkSection from './WorkSection';

export default class HomeMenu extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Away from home</Text>
        <WorkSection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 40,
  },
});
