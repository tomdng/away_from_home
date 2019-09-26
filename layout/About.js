import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

class About extends React.Component {
  render() {
    return(
      <View style={styles.background}>
        <View style={styles.title_background}>
          <Text style={styles.tutorial_title}>Upcoming Features</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.desc_text}>By end of 2019, I want to have...</Text>
          <Text style={styles.desc_text}>Fingerprint authentication</Text>
          <Text style={styles.desc_text}>Ability to submit tutorials to be approved and added</Text>
          <Text style={styles.desc_text}>A LOT more tutorials</Text>
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
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    marginTop: 50,
    marginRight: 40,
    marginLeft: 40
  },
  desc_text: {
    fontSize: 20,
    marginBottom: 5
  },
  background: {
    backgroundColor: '#FFF8F0',
    height: Dimensions.get('window').height
  }
})
