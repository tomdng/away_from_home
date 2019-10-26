import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import TutorialCard from '../components/TutorialCard';
import Title from '../components/Title';
import work_tutorials from '../constants/work_tutorial_list';

export default class WorkSection extends React.Component {
  render() {
    const tutorial_list = work_tutorials.map((tutorial, index) => {
      return(
        <TutorialCard
          name={tutorial.name}
          imgSource={tutorial.img_path}
          path={tutorial.path}
          key={index}
        />
      );
    })

    return (
      <View style={styles.background}>
        <View style={styles.title_background}>
          <Title title="Work Tutorials"/>
        </View>
        <View style={styles.tutorial_list}>{tutorial_list}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title_background: {
    backgroundColor: '#2A2D34',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  tutorial_list: {
    marginTop: 50
  },
  background: {
    backgroundColor: '#FFF8F0',
    height: Dimensions.get('window').height
  }
})
