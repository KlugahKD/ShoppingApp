import React from 'react';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import WelcomePage from './src/screens/WelcomePage';
import DetailsPage from './src/screens/DetailsPage';
import Cart from './src/screens/Cart';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;