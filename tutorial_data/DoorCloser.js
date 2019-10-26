import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Title from '../components/Title';
import VideoPreview from '../layout/VideoPreview';

export default class DoorCloser extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.title_background}>
          <Title title="Adjust Door Closer" />
        </View>
        <View style={styles.content}>
          <VideoPreview
            source={{uri: 'https://f001.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_za39d4b0082b7af7160d70114_f10965e6e4c5ce880_d20191007_m185154_c001_v0001090_t0048'}}
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
    height: 80,
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
