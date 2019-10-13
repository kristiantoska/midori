import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  crea,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import LaunchScreen from 'containers/LaunchScreen';
import Auth from 'containers/Auth';
import Profile from 'containers/Profile';

const AuthNav = createStackNavigator(
  {
    Auth: {
      screen: Auth,
      params: { type: 'login' },
    },
  },
  {
    headerMode: 'none',
  },
);

const TabNav = createBottomTabNavigator({
  Events: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: <Icon name="rocket" />,
    },
  },
  Posts: {
    screen: Profile,
  },
  Profile,
});

const AppNavigator = createSwitchNavigator(
  {
    LaunchScreen,
    AuthNav,
    TabNav,
  },
  {
    initialRouteName: 'TabNav',
  },
);

export default createAppContainer(AppNavigator);
