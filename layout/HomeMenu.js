import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCard from '../components/SectionCard';

export default class HomeMenu extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Away from home</Text>
        <SectionCard path="Work1" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30
  },
});
