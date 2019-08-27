import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ArticleIcon from '../components/ArticleIcon';

export default class WorkSection extends React.Component {
  render() {
    return (
      <View>
        <ArticleIcon
          imgSource={require('../assets/icon.png')}
          path="Work2"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
/*
  TODO: Add the styles for the tutorial cards.
  Consider the use of JSONs and mapping to generate these tutorial
  cards, and consider using a constants file for the navigation paths
  if that's even possible.
*/
});
