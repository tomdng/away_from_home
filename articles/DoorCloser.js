import React from 'react';
import { View, Text } from 'react-native';
import { Remarkable } from 'remarkable';

export default class DoorCloser extends React.Component {
  render() {
    var md = new Remarkable();

    var test_text = md.render('# Test Text!!!');

    return (
      <View>
        <Text>How to adjust the hydraulic door closer</Text>
        <Text>{test_text}</Text>
      </View>
    )
  } 
}