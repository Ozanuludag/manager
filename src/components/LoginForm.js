import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {useSelector, useDispatch} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {email, password} = useSelector((state) => state.auth);

  const emailChange = (text) => {
    dispatch(emailChanged(text));
    //önce indekste ki action tetikleniyor, ardından authreducer tetikleniyor.
  };

  const passwordChange = (text) => {
    dispatch(passwordChanged(text));
  };
  
  const buttonPress = () => {
    dispatch(loginUser({email, password}));
  };

  return (
    <Card>
      <CardSection>
        <Input
          onChangeText={(text) => emailChange(text)}
          label="Email"
          placeholder="user@gmail.com"
          value={email}
        />
      </CardSection>
      <CardSection>
        <Input
          onChangeText={(text) => passwordChange(text)}
          label="Password"
          placeholder="Password"
          secureTextEntry
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => buttonPress()}>Log in</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
