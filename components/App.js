import React from 'react';
import { createAppContainer } from 'react-navigation';
import { registerRootComponent } from 'expo';
import appNavigator from '../navigation/Navigator';

const AppContainer = createAppContainer(appNavigator);

export default class Appsds extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

registerRootComponent(Appsds);
