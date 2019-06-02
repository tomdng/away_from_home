import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeMenu from '../layout/HomeMenu';
import CardMachine from '../layout/articles/CardMachine';

const appNavigator = createStackNavigator(
  {
    Home: HomeMenu,
    Work1: CardMachine
  },
  {
    initialRouteName: 'Home'
  }
);

export default appNavigator;