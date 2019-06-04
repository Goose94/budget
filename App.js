import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, Button } from 'react-native';

import Header from './src/components/Header';

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Loading from './src/components/Loading';
import SignUp from './src/components/SignUp';
import Login from './src/components/Login';
import Main from './src/components/Main';
import Starling from './src/components/Starling';

// type Props = {};

const AppStack = createStackNavigator({Main:Main, Starling: Starling})
const AuthStack = createStackNavigator({SignUp: SignUp, Login: Login})

const AppNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
)

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

export default createAppContainer(AppNavigator);

//
// export default class App extends Component<Props> {
//
//   state = { loggedIn: null };
//
//   renderComponent() {
//     if (this.state.loggedIn) {
//       return (<Button
//         title="Sign out"
//         onPress={() => firebase.auth().signOut()} />)
//     } else {
//       return (
//         <LoginForm />
//       )
//     }
//   }
//   render() {
//     return (
//       <View>
//         <Header title='Budget' />
//         {this.renderComponent()}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
