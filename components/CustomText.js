import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

export default class CustomText extends React.Component{
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Capriola': require('../assets/fonts/Capriola-Regular.ttf')
    });

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View>
        {
          this.state.fontLoaded ? (
            <Text style={styles.text}>
              {this.props.text}
            </Text>
          ) : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontFamily: 'Capriola',
    fontSize: 30,
    textAlign: 'center'
  }
})
