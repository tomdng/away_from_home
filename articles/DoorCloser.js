import React from 'react';
import { View, Text } from 'react-native';
import { Remarkable } from 'remarkable';


/*
  Currently doing some markdown-parsing testing with remarkable. I'll most
  likely rely on a backend method for storing and fetching tutorials in the
  near future.
*/

export default class DoorCloser extends React.Component {
  render() {
    var md = new Remarkable();

    var test_text = md.render('# Step One');

    return (
      <View>
        <Text>How to adjust the hydraulic door closer</Text>
        <Text>{test_text}</Text>
        <Text>Find a 1/8 inch hex driver.</Text>
      </View>
    )
  } 
}