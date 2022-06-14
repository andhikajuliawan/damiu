import {Box, Text} from 'native-base';
import React from 'react';

const DividerCostum = () => {
  return (
    <Box flexDirection="row" alignItems="center" marginY={4}>
      <Box width="5%"></Box>
      <Box flex={1} height={0.3} backgroundColor="#9098B1" />
      <Box>
        <Text
          width={50}
          textAlign="center"
          fontFamily="Poppins-Bold"
          fontSize={14}
          color="#9098B1">
          OR
        </Text>
      </Box>
      <Box flex={1} height={0.3} backgroundColor="#9098B1" />
      <Box width="5%"></Box>
    </Box>
  );
};

export default DividerCostum;
