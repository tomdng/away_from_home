import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import CustomText from './CustomText';

class sectionCard extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.path)}>
        <View style={styles.section_card}>
          <View style={styles.margins}>
            <CustomText text={this.props.name}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  section_card: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 50,
    backgroundColor:'#384D48',
    borderRadius: 25,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15
  },
  margins: {
    margin: 40
  }
})

export default withNavigation(sectionCard);