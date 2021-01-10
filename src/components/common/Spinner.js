import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color="dodgerblue" />
    </View>
  );
};

export {Spinner};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
