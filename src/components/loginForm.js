import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Input} from './common';
export default class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
    };
  }

  render() {
    return (
      <View style={styles.LoginBox}>
        <View>
            <Input value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}} text='Email' inputPlaceHolder='Eposta Giriniz'/>
        </View>
        <View>
            <Input secureTextEntry value={this.state.password} onChangeText={(text)=>{this.setState({password:text})}}  text='Şifre'/>
        </View>
        <TouchableOpacity style={{marginTop:10,width:'100%',height:45,backgroundColor:'white',borderRadius:12,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'#e87b79'}}>Giriş</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles =StyleSheet.create({
LoginBox:{
    padding:10,
}
});