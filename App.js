import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

type Props = {};

export default class App extends Component<Props> {

  state = { loggedIn: null };

  renderComponent() {
    if (this.state.loggedIn) {
      return (<Button
        title="Sign out"
        onPress={() => firebase.auth().signOut()} />)
    } else {
      return (
        <LoginForm />
      )
    }
  }
  render() {
    return (
      <View>
        <Header title='Budget' />
        {this.renderComponent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
