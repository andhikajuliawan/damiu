/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  View,
} from 'native-base';

import {AuthProvider} from './src/context/AuthContext';

import Navigation from './src/navigation/index';

const App = () => {
  return (
    <AuthProvider>
      <NativeBaseProvider flex="1">
        <Navigation />
      </NativeBaseProvider>
    </AuthProvider>
  );
};
export default App;
