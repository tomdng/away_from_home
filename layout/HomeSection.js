import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TutorialCard from '../components/TutorialCard'
import Title from '../components/Title';
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
        <Title title="Home Tutorials" />
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