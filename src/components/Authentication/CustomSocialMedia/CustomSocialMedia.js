import {Button, Center, Text, HStack, Box, Image, View} from 'native-base';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomSocialMedia = ({
  onPressButton,
  variant,
  width,
  bgColor,
  fontSize,
  textButton,
  color,
  icon,
  socialAccount,
}) => {
  return (
    <Center marginBottom={2}>
      <Button
        onPress={onPressButton}
        variant={variant}
        width={width}
        backgroundColor={bgColor}>
        {socialAccount ? (
          <HStack
            marginY={1.5}
            alignItems="center"
            justifyContent="space-around"
            width="100%">
            <Image
              source={require('../../../../assets/images/facebookIcon.png')}
              alt="facebookIcon"
              width={5}
              height={5}
              resizeMode="contain"
            />
            <Box textAlign="center">
              <Center>
                <Text
                  color={color}
                  fontSize={fontSize}
                  fontFamily="Poppins-Bold">
                  {textButton}
                </Text>
              </Center>
            </Box>
            <Box width={5} height={5}></Box>
          </HStack>
        ) : (
          <HStack
            marginY={1.5}
            alignItems="center"
            justifyContent="space-around"
            width="100%">
            <Image
              source={require('../../../../assets/images/googleIcon.png')}
              alt="facebookIcon"
              width={5}
              height={5}
              resizeMode="contain"
            />
            <Box textAlign="center">
              <Center>
                <Text
                  color={color}
                  fontSize={fontSize}
                  fontFamily="Poppins-Bold">
                  {textButton}
                </Text>
              </Center>
            </Box>
            <Box width={5} height={5}></Box>
          </HStack>
        )}
      </Button>
    </Center>
  );
};

export default CustomSocialMedia;
