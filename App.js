import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { isContainer } from 'postcss-selector-parser';
import { Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Away from home</Text>
        <Image
          source={require('./assets/icon.png')}
        />
        <Image
          source={require('./assets/icon.png')}
        />
        <Image
          source={require('./assets/icon.png')}
        />
        <Image
          source={require('./assets/icon.png')}
        />
      </View>
    );
  }
}

//Creating stylesheets for the app
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
