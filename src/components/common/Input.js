/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {container, inputStyle, labelStyle} = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
});
