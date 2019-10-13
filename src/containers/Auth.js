import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  LayoutAnimation,
} from 'react-native';

const Input = ({ ...params }) => (
  <View style={styles.inputContainer}>
    <TextInput {...params} style={styles.input} />
  </View>
);

export default class Auth extends Component {
  switchTo(type) {
    LayoutAnimation.easeInEaseOut();
    this.props.navigation.navigate('Auth', { type });
  }

  submit() {
    this.props.navigation.navigate('TabNav');
  }

  render() {
    const type = this.props.navigation.getParam('type');

    return (
      <ScrollView style={styles.container} contentContainerStyle={{ flex: 1 }}>
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Midori</Text>
          </View>
        </View>

        <View
          style={{
            flex: 7,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Text style={styles.loginText}>
            {type === 'login' ? 'Login' : 'Signup'}
          </Text>

          {type === 'signup' && <Input placeholder="username" />}

          <Input placeholder="email" />

          <Input placeholder="password" secureTextEntry />

          {type === 'signup' && <Input placeholder="password*" />}

          <View
            style={{
              width: '60%',
              alignItems: 'flex-end',
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={() => this.submit()}>
              <Text style={{ color: '#2E93FF', fontWeight: '600' }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.create}>
            {type === 'login' ? (
              <TouchableOpacity onPress={() => this.switchTo('signup')}>
                <Text>Don't have an account?</Text>
                <Text style={{ textAlign: 'center' }}>Sing up</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.switchTo('login')}>
                <Text>Have an account?</Text>
                <Text style={{ textAlign: 'center' }}>Login</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity>
              <Text style={{ textAlign: 'left' }}>Tems of service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'relative', right: 2 }}>
              <Text style={{ textAlign: 'right', color: '#2E93FF' }}>
                Guest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  logoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 10,
    shadowColor: 'black',
    backgroundColor: 'white',
  },

  logoText: {
    fontSize: 30,
    color: '#00B5A6',
    letterSpacing: 2,
  },

  loginText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
    color: '#2E93FF',
    fontWeight: '600',
    letterSpacing: 1,
  },

  inputContainer: {
    shadowOpacity: 0.3,
    shadowOffset: { height: 1 },
    shadowRadius: 2,
    shadowColor: 'black',
    backgroundColor: 'white',
    width: '60%',
    height: 45,
    borderRadius: 5,
    marginVertical: 10,
  },

  input: {
    flex: 1,
    paddingLeft: 20,
  },

  create: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
