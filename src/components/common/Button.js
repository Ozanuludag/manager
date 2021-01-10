import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.activeButtonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};/*
const Button = ({onPress, children,disable}) => {
  console.log(disable);
  return (
    <TouchableOpacity disabled={disable} onPress={onPress} style={disable == true ? styles.deactiveButtonStyle : styles.activeButtonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};*/

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  activeButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  deactiveButtonStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#b7b7a4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b7b7a4',
    marginLeft: 5,
    marginRight: 5,
  }
});

export {Button};
