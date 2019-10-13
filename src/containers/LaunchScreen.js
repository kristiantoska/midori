import React from 'react';
import { Text, View } from 'react-native';

class LaunchScreen extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return <View style={{ flex: 1, backgroundColor: 'white' }} />;
  }
}

export default LaunchScreen;
