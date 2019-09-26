import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Video } from 'expo-av';

export default class VideoPreview extends React.Component {
  render() {
    return (
      <View style={styles.center}>
        <Video
            source={this.props.source}
            useNativeControls={true}
            resizeMode="contain"
            style={styles.video_preview}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  video_preview: {
    alignItems: 'center',
    borderRadius: 25,
    width: 300,
    height: 500,
  }
})
