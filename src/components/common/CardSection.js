/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

const CardSection = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export {CardSection};
