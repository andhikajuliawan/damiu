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

import Navigation from './src/navigation';

const App = () => {
  return (
    <NativeBaseProvider flex="1">
      <Navigation />
    </NativeBaseProvider>
  );
};
export default App;
