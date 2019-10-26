import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

export default class StandardText extends React.Component{
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
    const fontColor = this.props.fontColor;
    const fontSize = this.props.fontSize;

    return (
      <View>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.text, {
              color: fontColor,
              fontSize: Number(fontSize)
            }]}>
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
    fontFamily: 'Capriola',
    textAlign: 'center'
  }
})
