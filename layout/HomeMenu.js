import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SectionCard from '../components/SectionCard';
import Title from '../components/Title';

export default class HomeMenu extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.title_background}>
          <Title title="Away from Home" />
        </View>
        <View style={styles.section_list}>
          <SectionCard name="Work Section" path="Work_Section" />
          <SectionCard name="Upcoming Features" path="Home_Section" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title_text: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
  },
  title_background: {
    backgroundColor: '#2A2D34',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  section_list: {
    marginTop: 50
  },
  background: {
    backgroundColor: '#FFF8F0',
    height: Dimensions.get('window').height
  }
});
