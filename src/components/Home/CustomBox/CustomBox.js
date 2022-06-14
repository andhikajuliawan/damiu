import {Box, Button, Container, HStack, Text, View, VStack} from 'native-base';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomBox = ({onPressHubungkan}) => {
  return (
    <>
      <Box width="100%" height={50} bgColor="#3DADE2"></Box>
      <Box
        shadow={3}
        width="93%"
        bgColor="white"
        rounded={10}
        paddingY={5}
        marginTop={-12}>
        <HStack justifyContent="space-evenly">
          <HStack alignItems="center" width="40%" justifyContent="center">
            <Box marginRight={3}>
              <Ionicons name="wallet-outline" color="#3DADE2" size={30} />
            </Box>
            <VStack>
              <Text color="#3DADE2" fontSize={12} fontFamily="Poppins-Regular">
                Poin
              </Text>
              <Text color="#3DADE2" fontSize={15} fontFamily="Poppins-Regular">
                20.500.000
              </Text>
            </VStack>
          </HStack>
          <Box bgColor="#3DADE2" width={0.4}></Box>
          <Button width="40%" onPress={onPressHubungkan} bgColor="transparent">
            <HStack alignItems="center">
              <Box marginRight={1}>
                <Ionicons
                  name="checkmark-circle-outline"
                  color="#3DADE2"
                  size={30}
                />
              </Box>
              <Text color="#3DADE2" fontSize={15} fontFamily="Poppins-Regular">
                Hubungkan
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                color="#3DADE2"
                size={30}
              />
            </HStack>
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default CustomBox;
