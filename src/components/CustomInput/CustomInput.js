import {Input, Box} from 'native-base';
import React from 'react';

// import {MaterialIcons} from '@expo/vector-icons';

const CustomInput = ({variant, placeholder, width, size}) => {
  return (
    <Box alignItems="center">
      <Input
        variant={variant}
        placeholder={placeholder}
        my={1}
        w={width}
        size={size}
      />
    </Box>
  );
};

export default CustomInput;
