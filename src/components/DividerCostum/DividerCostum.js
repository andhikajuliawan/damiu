import {Box, Text} from 'native-base';
import React from 'react';

const DividerCostum = () => {
  return (
    <Box flexDirection="row" alignItems="center" marginY={4}>
      <Box width="3%"></Box>
      <Box flex={1} height={0.3} backgroundColor="#9098B1" />
      <Box>
        <Text width={50} textAlign="center" fontWeight="bold" color="#9098B1">
          OR
        </Text>
      </Box>
      <Box flex={1} height={0.3} backgroundColor="#9098B1" />
      <Box width="3%"></Box>
    </Box>
  );
};

export default DividerCostum;
