import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {useSelector, useDispatch} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions';
import {Picker} from '@react-native-picker/picker';
import EmployeeForm from './EmployeeForm';

const EmployeeCreate = () => {
  const dispatch = useDispatch();
  const {name, phone, shift} = useSelector(
    (state = null) => state.employeeForm,
  );

  const onButtonPress = () => {
    dispatch(employeeCreate({name, phone, shift}));
  };
  return (
    <Card>
      <EmployeeForm name={name} phone={phone} shift={shift} />
      <CardSection>
        <Button onPress={() => onButtonPress()}>Create</Button>
      </CardSection>
    </Card>
  );
};

export default EmployeeCreate;

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 25,
  },
});
