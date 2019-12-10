import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Banner from './components/banner';
import Form from './components/loginForm';
import firebase from 'firebase'
import loginForm from './components/loginForm';
import Spinner from './components/common';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCkm0vTnosgv8UtKOzs9GwlmYBKqv28GYA",
      authDomain: "giris-6c512.firebaseapp.com",
      databaseURL: "https://giris-6c512.firebaseio.com",
      projectId: "giris-6c512",
      storageBucket: "giris-6c512.appspot.com",
      messagingSenderId: "812577739876",
      appId: "1:812577739876:web:c467f842bc951c1fa17b71",
      measurementId: "G-PMY60CWDJY"
    });
    firebase.auth().onAuthStateChanged((user) => {
      const loggedIn = user ? true : false;
      this.setState({ loggedIn });
    })
  }
  renderContent() {
    const { loggedIn } = this.state;
    switch (loggedIn) {
      case true:
        return (
          <TouchableOpacity onPress={()=>firebase.auth().signOut()} style={{ marginTop: 10, width: '100%', height: 45, backgroundColor: 'white', borderRadius: 12, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: '#e87b79' }}>Log Out</Text></TouchableOpacity>
        )
    
      case false:
        return (
          <Form/>
          )
          default:
            return(
              <Spinner/>
            )
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Banner text="Kullanıcı Girişi" />
        {this.renderContent()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
