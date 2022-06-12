import {Center, VStack, Image, Text} from 'native-base';
import React from 'react';

const Logo = ({title, description}) => {
  return (
    <Center>
      <VStack alignItems="center">
        <Image
          source={require('../../../assets/images/Logo-Damiu.png')}
          alt="Alternate Text"
          size="md"
          marginBottom={5}
          marginTop={20}
        />
        <Text
          fontSize={21}
          fontFamily="Poppins-Bold"
          color="#223263"
          marginBottom={2}>
          {title}
        </Text>
        <Text
          fontSize={16}
          fontFamily="Poppins-Regular"
          color="#9098B1"
          marginBottom={5}>
          {description}
        </Text>
      </VStack>
    </Center>
  );
};

export default Logo;
