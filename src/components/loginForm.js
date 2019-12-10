import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Input, Spinner } from './common';
import firebase from 'firebase';
export default class loginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    onButtonClicked() {
        const { email, password } = this.state;
        this.setState({ error: '' ,loading:true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
            .catch((error) => {
                console.log(error)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch((error) => {
                        console.log(error);
                        this.setState({
                            error: 'Authentication Error',
                            loading:false
                        })
                    })
            })
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:'',
        })
    }
    render() {
        const { error, loading } = this.state;
        const errorMsg = error ? (
            <Text style={{ fontSize: 20, color: 'red', alignSelf: 'center', marginTop: 10 }}>{error}</Text>
        ) :
            null;
        const loginButton = loading ? (
            
            <Spinner />
        ) :
            <TouchableOpacity onPress={this.onButtonClicked.bind(this)} style={{ marginTop: 10, width: '100%', height: 45, backgroundColor: 'white', borderRadius: 12, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#e87b79' }}>Giriş</Text></TouchableOpacity>;
        return (
            <View style={styles.LoginBox}>
                <View>
                    <Input value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} text='Email' inputPlaceHolder='Eposta Giriniz' />
                </View>
                <View>
                    <Input secureTextEntry value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} text='Şifre' />
                </View>
                {errorMsg}
                    {loginButton}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginBox: {
        padding: 10,
    }
});