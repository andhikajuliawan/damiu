import {} from 'native-base';
import React from 'react';

// Screens
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreens';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
