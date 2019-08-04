import React from 'react';
import { View, Text } from 'react-native';
import ArticleIcon from '../components/ArticleIcon';

class WorkSection extends React.Component {
  render() {
    return (
      <View>
        <Text>Work Section</Text>
        <ArticleIcon
          imgSource={require('../assets/icon.png')}
          path="Work1"
        />
        <ArticleIcon
          imgSource={require('../assets/icon.png')}
          path="Work1"
        />
        <ArticleIcon
          imgSource={require('../assets/icon.png')}
          path="Work1"
        />
      </View>
    );
  }
}

export default WorkSection;
