import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Pacifico': require('../assets/fonts/Pacifico-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View>
        {
          this.state.fontLoaded ? (
            <Text style={styles.title}>
              {this.props.title}
            </Text>
          ) : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontFamily: 'Pacifico',
    fontSize: 36,
    textAlign: 'center'
  }
})
