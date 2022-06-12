import {Button, Center, Text, HStack, Box} from 'native-base';
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
        <HStack marginY={1.5} alignItems="center">
          <Box width="15%">
            <Ionicons
              name={icon}
              size={25}
              color="#9098B1"
              style={{marginRight: 10}}
            />
          </Box>
          {socialAccount ? (
            <Box width="85%" paddingRight="8%" textAlign="center">
              <Center>
                <Text
                  color={color}
                  fontSize={fontSize}
                  fontFamily="Poppins-Bold">
                  {textButton}
                </Text>
              </Center>
            </Box>
          ) : (
            <Box width="85%" paddingRight="10%" textAlign="center">
              <Center>
                <Text
                  color={color}
                  fontSize={fontSize}
                  fontFamily="Poppins-Bold">
                  {textButton}
                </Text>
              </Center>
            </Box>
          )}
        </HStack>
      </Button>
    </Center>
  );
};

export default CustomSocialMedia;
