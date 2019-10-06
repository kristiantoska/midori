import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchScreen from 'containers/LaunchScreen';

const AppNavigator = createStackNavigator({
  LaunchScreen,
});

export default createAppContainer(AppNavigator);
