import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {employeesFetch} from '../actions/EmployeeActions';
import {Card, CardSection, Spinner} from '../components/common';
import {Actions} from 'react-native-router-flux';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const {employees, loading} = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(employeesFetch());
    console.log("Liste logu çalıştı.");
  }, []);
 
  if (loading) {
    return <Spinner size="large" />;
  }

  return (
    <View>
      <FlatList
        data={employees}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => Actions.employeeEdit({item})}>
              <Card>
                <CardSection>
                  <Text>{item.name}</Text>
                </CardSection>
              </Card>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default EmployeeList;

const styles = StyleSheet.create({});
