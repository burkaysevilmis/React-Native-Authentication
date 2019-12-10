import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Banner from './components/banner';
import Form from './components/loginForm';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Banner text="Kullanıcı Girişi"/>
        <Form/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})
