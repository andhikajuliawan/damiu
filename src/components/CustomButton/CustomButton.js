import {Button, Center, Text, HStack} from 'native-base';
import React from 'react';

const CustomButton = ({
  onPressButton,
  onPressText,
  text,
  textButton,
  width,
  fontSize,
  bgColor,
  color,
  textLink,
  variant,
  button,
  linkButton,
}) => {
  return (
    <Center>
      {button ? (
        <Button
          onPress={onPressButton}
          variant={variant}
          width={width}
          backgroundColor={bgColor}>
          <Text color={color} fontSize={fontSize} fontWeight="bold">
            {textButton}
          </Text>
        </Button>
      ) : null}
      {linkButton ? (
        <HStack marginTop={3}>
          <Text fontSize="md" color="#9098B1">
            {text}
          </Text>
          <Text
            onPress={onPressText}
            color="#3EADE2"
            fontSize="md"
            fontWeight="bold">
            {textLink}
          </Text>
        </HStack>
      ) : null}
    </Center>
  );
};

export default CustomButton;
