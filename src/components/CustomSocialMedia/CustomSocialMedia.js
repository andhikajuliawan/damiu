import {Button, Center, Text} from 'native-base';
import React from 'react';

const CustomSocialMedia = ({
  onPressButton,
  variant,
  width,
  bgColor,
  fontSize,
  textButton,
  color,
}) => {
  return (
    <Center marginBottom={2}>
      <Button
        onPress={onPressButton}
        variant={variant}
        width={width}
        backgroundColor={bgColor}>
        <Text color={color} fontSize={fontSize} fontWeight="bold">
          {textButton}
        </Text>
      </Button>
    </Center>
  );
};

export default CustomSocialMedia;
