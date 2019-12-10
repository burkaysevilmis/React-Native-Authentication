import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}> {this.props.text} </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e87b79',
    },
    bannerText:{
        fontSize:34,
        color:'#fff'
    }
})
