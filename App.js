import React from 'react';
import WelcomePage from './SCREENS/WelcomePage';
import LoginPage from './SCREENS/LoginPage';
import SignUpPage from './SCREENS/SignUpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App(){
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="LoginPage" component={LoginPage} options = {{headerShown:false}}/>
       <Stack.Screen name="SignUpPage" component={SignUpPage} options = {{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );

}