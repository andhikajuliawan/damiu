import {Center, VStack, Image, Text} from 'native-base';
import React from 'react';

const Logo = ({title, description}) => {
  return (
    <Center>
      <VStack alignItems="center">
        <Image
          source={require('../../../../assets/images/Logo-Damiu.png')}
          alt="Alternate Text"
          size="md"
          marginY={5}
          borderRadius={10}
        />
        <Text
          fontSize={18}
          fontFamily="Poppins-Bold"
          color="#223263"
          marginBottom={1}>
          {title}
        </Text>
        <Text
          fontSize={14}
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
