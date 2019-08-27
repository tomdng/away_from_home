import React from 'react';
import { createStackNavigator } from "react-navigation";
import HomeMenu from '../layout/HomeMenu';
import WorkSection from '../layout/WorkSection';
//import CardMachine from '../layout/articles/CardMachine';
import DoorCloser from '../articles/DoorCloser';

const appNavigator = createStackNavigator(
  {
    Home: HomeMenu,
    Work1: WorkSection,
    Work2: DoorCloser
  },
  {
    initialRouteName: 'Home'
  }
);

export default appNavigator;