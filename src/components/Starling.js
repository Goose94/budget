import React from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  AppState,
  Linking,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import firebase from '@react-native-firebase/app'

const config = require('../../config.json');

export default class Starling extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.initialState();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={[styles.defaultText, styles.message]}>Starling</Text>
        <LoginView onLoginTapped={this.loginWithStarling}/>
      </View>
    );
  }

  initialState () {
    return {
      loggedIn: true, // Assume logged in until proven otherwise.
      loading: false,
      customer: {}
    };
  }

  loginWithStarling = () => {
    const oauthState = Math.random().toString(36).substring(7);
    this.setState({
      message: null,
      oauthState: oauthState
    });
    const oauthUrl = `starlingbank://oauth?client_id=${config.clientId}&response_type=code&redirect_url=${encodeURIComponent(config.oauthLoginCallbackUri)}&state=${oauthState}`;
    Linking.openURL(oauthUrl).catch(err => this.setState({message: error.message}));
  };


}

const LoginView = (props) => {
  return (
    <TouchableOpacity onPress={props.onLoginTapped}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Login with Starling</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  message: {
    fontSize: 26,
    fontWeight: '400',
    color: '#C33C54',
    paddingBottom: 30
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDFB',
    padding: 10,
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 30,
    fontWeight: '400',
    color: '#7CBA5B'
  },
  transactionListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  transactionReference: {
    fontSize: 22,
    fontWeight: '400',
    color: '#2B647F',
  },
  transactionAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#24CBD0'
  },
  loggedInView: {
    marginTop: 50
  },
  button: {
    backgroundColor: '#ACADAF',
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#193957',
  },
});
