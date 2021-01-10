import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {useSelector, useDispatch} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {email, password, errorLog, loading} = useSelector(
    (state) => state.auth,
  );
  //console.log('email:' + email);
  //console.log('password:' + password);

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

  const failComponent = () => {
    if (errorLog) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{errorLog}</Text>
        </View>
      );
    }
  };
  const renderButton = () => {
    if (loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        //disable={email && password ? false : true}
        onPress={() => buttonPress()}>
        Log in
      </Button>
    );
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
      <CardSection>{renderButton()}</CardSection>
      {failComponent()}
    </Card>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});
