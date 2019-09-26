import React from 'react';
import { createStackNavigator } from "react-navigation";
import HomeMenu from '../layout/HomeMenu';
import WorkSection from '../layout/WorkSection';
//import HomeSection from '../layout/HomeSection';
import About from '../layout/About';
import DoorCloser from '../tutorial_data/DoorCloser';
import CardMachine from '../tutorial_data/CardMachine';
import WifiReset from '../tutorial_data/WifiReset'

/*
  TODO: Consider using an external JSON for the navigation if
  that's even possible
  TODO: Make dedicated navigation route to About seciton
*/

const appNavigator = createStackNavigator(
  {
    Home: HomeMenu,
    Work_Section: WorkSection,
    Home_Section: About,
    Work_Tut_Door_Closer: DoorCloser,
    Work_Tut_Card_Machine: CardMachine,
    Home_Tut_Wifi_Reset: WifiReset
  },
  {
    initialRouteName: 'Home'
  }
);

export default appNavigator;