import {Input, Box} from 'native-base';
import React from 'react';

// Icon
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import {MaterialIcons} from '@expo/vector-icons';

const CustomInput = ({
  value,
  setValue,
  variant,
  placeholder,
  width,
  size,
  icon,
  type,
}) => {
  return (
    <Box alignItems="center">
      <Input
        value={value}
        onChangeText={setValue}
        variant={variant}
        placeholder={placeholder}
        my={1}
        py={3}
        w={width}
        size={size}
        type={type}
        fontFamily="Poppins-Regular"
        InputLeftElement={
          <Ionicons
            name={icon}
            size={25}
            color="#9098B1"
            style={{marginLeft: 10}}
          />
        }
      />
    </Box>
  );
};

export default CustomInput;
