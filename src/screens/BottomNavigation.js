import 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons,  AntDesign,  Feather } from '@expo/vector-icons';
import {StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import COLORS from '../consts/colors';


const Tab = createBottomTabNavigator();

const BottomNavigator = (props) => {
    const navigation=props.navigation;
  return (
  <View style={Style.bottombar}>
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('HomePage'); }}>
                    <AntDesign name="home" size={30} color="black" />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { navigation.navigate('HomePage'); }}>
                    <Feather name="heart" size={30} color="black" />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Cart'); }}>
                    <Feather name="shopping-bag" size={30} color="black" />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { navigation.navigate('HomePage'); }}>
                    <Ionicons name="person-outline" size={33} color="black" />
                </TouchableWithoutFeedback> 
  </View>
  );
};
  const Style = StyleSheet.create({
    bottombar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: COLORS.dark,
        borderRadius: 15,
        paddingVertical: 10,
    },
});


export default BottomNavigator;