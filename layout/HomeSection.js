import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TutorialCard from '../components/TutorialCard'
import home_tutorials from '../constants/home_tutorial_list';

export default class HomeSection extends React.Component {
  render() {
    const tutorial_list = home_tutorials.map((tutorial, index) => {
      return(
        <TutorialCard
          name={tutorial.name}
          imgSource={tutorial.img_path}
          path={tutorial.path}
          key={index}
        />
      )
    })

    return (
      <View>
        <Text style={styles.section_title}>Home Tutorials</Text>
        <View>{tutorial_list}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  section_title: {
    fontSize: 40,
    marginTop: 30,
    textAlign: 'center'
  }
})