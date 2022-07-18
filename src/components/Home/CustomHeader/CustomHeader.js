import {Box, HStack, Text} from 'native-base';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({nameUser, onPressMail, onPressBasket}) => {
  return (
    <Box width="100%" bgColor="#3DADE2" paddingX="6" height={70}>
      <HStack
        marginTop={8}
        marginBottom={4}
        alignItems="center"
        alignContent="center"
        justifyContent="space-between">
        <Text color="white" fontSize={16} fontFamily="Poppins-SemiBold">
          Hi, {nameUser}
        </Text>

        <HStack>
          <Ionicons name="mail" color="white" size={25} onPress={onPressMail} />
          {/* <Box marginX={2}></Box>
          <Ionicons
            name="basket"
            color="white"
            size={25}
            onPress={onPressBasket}
          /> */}
        </HStack>
      </HStack>
    </Box>
  );
};

export default CustomHeader;
