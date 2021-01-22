import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {useSelector, useDispatch} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions';
import {Picker} from '@react-native-picker/picker';

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const {name, phone, shift} = useSelector(
    (state = null) => state.employeeForm,
  );
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={name}
          onChangeText={(value) =>
            dispatch(employeeUpdate({prop: 'name', value}))
          }
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={(value) =>
            dispatch(employeeUpdate({prop: 'phone', value}))
          }
        />
      </CardSection>
      <CardSection
        style={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        <Picker
          selectedValue={shift}
          style={{width: 150}}
          onValueChange={(day) =>
            dispatch(employeeUpdate({prop: 'shift', value: day}))
          }>
          <Picker.Item label="Pazartesi" value="Pazartesi" />
          <Picker.Item label="Salı" value="Salı" />
          <Picker.Item label="Çarşamba" value="Çarşamba" />
          <Picker.Item label="Perşembe" value="Perşembe" />
          <Picker.Item label="Cuma" value="Cuma" />
          <Picker.Item label="Cumartesi" value="Cumartesi" />
          <Picker.Item label="Pazar" value="Pazar" />
        </Picker>
      </CardSection>
    </Card>
  );
};

export default EmployeeForm;

const styles = StyleSheet.create({});
