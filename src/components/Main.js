// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from '@react-native-firebase/app'

export default class Main extends React.Component {
  state = { currentUser: null }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  componentDidMount(){
  const { currentUser } = firebase.auth()
  this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
          <View style={styles.container}>
            <Text>
              Hi {currentUser && currentUser.email}!
            </Text>
            <Button title="Sign Out" onPress={this.handleSignOut} />
          </View>

        )
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
