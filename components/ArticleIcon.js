import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class ArticleIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.path)}>
        <Image
          style={styles.image}
          source={this.props.imgSource}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});

export default withNavigation(ArticleIcon);
