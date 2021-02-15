import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WelcomeScreen from './Screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator},

})

const AppContainer = createAppContainer(switchNavigator);