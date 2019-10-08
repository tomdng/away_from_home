import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class TutorialCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(this.props.path)}
      >
        <View style={styles.tutorial_block}>
          <Text style={styles.text}>{this.props.name}</Text>
          <View style={styles.image}>
            <Image
              style={styles.image_size}
              source={{uri: this.props.imgSource}}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

//require('../assets/thumbnails/door_closer_img.jpg')

const styles = StyleSheet.create({
  tutorial_block: {
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 50,
    backgroundColor:'#384D48',
    borderRadius: 25,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  image_size: {
    height: '100%',
    resizeMode: 'cover'
  }
});

export default withNavigation(TutorialCard);
