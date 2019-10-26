import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Title from '../components/Title';
import StandardText from '../components/StandardText';

class About extends React.Component {
  render() {
    return(
      <View style={styles.background}>
        <View style={styles.title_background}>
          <Title title="About" />
        </View>
        <View style={styles.body}>
          <StandardText
            fontColor = "#000"
            fontSize = "26"
            text = "Made by Tommy Dong"
          />
          <StandardText
            fontColor = "#000"
            fontSize = "26"
            text = "Please email features and suggestions to contact@tomdong.io"
          />
          <StandardText
            fontColor = "#000"
            fontSize = "26"
            text = "If you have a great idea for a tutorial, let me know too!"
          />
        </View>
      </View>
    );
  }
}

export default About;

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
  body: {
    flexDirection:'column',
    flexGrow: 0.5,
    justifyContent: 'space-evenly',
    marginTop: 50,
    marginRight: 40,
    marginLeft: 40
  },
  background: {
    backgroundColor: '#FFF8F0',
    height: Dimensions.get('window').height
  }
})
