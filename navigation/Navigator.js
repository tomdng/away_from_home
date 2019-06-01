import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeMenu from '../components/HomeMenu';
import CardMachine from '../components/CardMachine';

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