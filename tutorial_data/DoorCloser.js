import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import VideoPreview from '../layout/VideoPreview';

export default class DoorCloser extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.title_background}>
          <Text style={styles.tutorial_title}>Adjust Door Closer</Text>
        </View>
        <View style={styles.content}>
          <VideoPreview
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          />
        </View>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  tutorial_title: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center'
  },
  title_background: {
    backgroundColor: '#2A2D34',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  background: {
    backgroundColor: '#FFF8F0',
    height: Dimensions.get('window').height,
    flexDirection: 'column'
  }
})
