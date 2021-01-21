import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {useSelector, useDispatch} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions';
import {Picker} from '@react-native-picker/picker';

const EmployeeForm = ({name, phone, shift}) => {
  const dispatch = useDispatch();

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
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>

     
    </Card>
  );
};

export default EmployeeForm;

const styles = StyleSheet.create({});
