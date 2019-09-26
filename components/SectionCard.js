import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class sectionCard extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.path)}>
        <View style={styles.section_card}>
          <Text style={styles.card_title}>{this.props.name}</Text>
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
  },
  card_title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    margin: 40
  }
})

export default withNavigation(sectionCard);