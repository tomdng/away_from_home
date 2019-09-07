import React from 'react';
import { createStackNavigator } from "react-navigation";
import HomeMenu from '../layout/HomeMenu';
import WorkSection from '../layout/WorkSection';
import HomeSection from '../layout/HomeSection';
import DoorCloser from '../articles/DoorCloser';
import CardMachine from '../articles/CardMachine';
import WifiReset from '../articles/WifiReset'

/*
  Consider using an external JSON for the navigation if that's even possible
*/

const appNavigator = createStackNavigator(
  {
    Home: HomeMenu,
    Work_Section: WorkSection,
    Home_Section: HomeSection,
    Work_Tut_Door_Closer: DoorCloser,
    Work_Tut_Card_Machine: CardMachine,
    Home_Tut_Wifi_Reset: WifiReset
  },
  {
    initialRouteName: 'Home'
  }
);

export default appNavigator;