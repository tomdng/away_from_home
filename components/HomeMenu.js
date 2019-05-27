import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { isContainer } from 'postcss-selector-parser';

export default class HomeMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Away from home</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Work1')}>
          <Image
            style={styles.image}
            source={require('../assets/icon.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../assets/icon.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/icon.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/icon.png')}
        />
      </View>
    );
  }
}

//Creating stylesheets for the home menu
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 40,
  },
});
