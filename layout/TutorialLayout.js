import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TutorialLayout extends React.Component {
  render() {
    const tutorial_steps = this.props.tutorial.map((step, index) => {
      //The first tutorial step is going to be the video
      if (index == 0) {
        return(
          <Text key={index}>This is the video</Text>
        );
      } else {
        return(
          <Text key={index}>This is step {index}</Text>
        );
      }
    })

    return (
      <View>{tutorial_steps}</View>
    );
  }
}

const styles = StyleSheet.create({
  // TODO: Add styles here
})
