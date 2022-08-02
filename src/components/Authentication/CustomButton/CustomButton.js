import {Button, Center, Text, HStack, Spinner} from 'native-base';
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
  marginTop,
  isLoading,
}) => {
  return (
    <Center>
      {button ? (
        <Button
          onPress={onPressButton}
          variant={variant}
          width={width}
          backgroundColor={bgColor}>
          <Text
            color={color}
            fontSize={fontSize}
            marginY={2}
            fontFamily="Poppins-Bold">
            {isLoading ? <Spinner color="#fff" /> : textButton}
          </Text>
        </Button>
      ) : null}
      {linkButton ? (
        <HStack marginTop={marginTop}>
          <Text fontFamily="Poppins-Regular" fontSize={14} color="#9098B1">
            {text}
          </Text>
          <Text
            onPress={onPressText}
            color="#3EADE2"
            fontFamily="Poppins-Bold"
            fontSize={14}>
            {textLink}
          </Text>
        </HStack>
      ) : null}
    </Center>
  );
};

export default CustomButton;
