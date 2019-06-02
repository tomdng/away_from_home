import React from 'react';
import { Image } from 'react-native';

export default class ArticleIcon extends React.Component {
  render() {
    return (
      <Image
        source={props.imgSource}
      />
    );
  }
}