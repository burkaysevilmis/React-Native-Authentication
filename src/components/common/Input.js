import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ text, inputPlaceHolder,onChangeText,value,secureTextEntry }) => {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.textStyle}>{text}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
             style={styles.inputStyle}
                placeholder={inputPlaceHolder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        alignItems: 'center',
        borderColor: 'red',
        borderBottomWidth: 1,
        
    },
    textStyle: {
        flexGrow:1,
        fontSize:17

    },
    inputStyle: {
    flexGrow:2,
    fontSize:17
    }
});

export { Input };
