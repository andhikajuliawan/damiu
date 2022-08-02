import {HStack, Text, Button, Box} from 'native-base';
import React from 'react';

const CustomListPembelian = ({
  order,
  tanggal,
  jumlah,
  harga,
  onPressDetails,
  status,
}) => {
  return (
    <Box mx={4} px={5} py={4} bg="#fff" borderRadius={10} shadow={3} mt={3}>
      <HStack justifyContent="space-between">
        <Text fontSize={14} fontFamily="Poppins-Bold" mb={2} color="#223263">
          Order No {order}
        </Text>
        <Text fontSize={12} fontFamily="Poppins-Regular" mb={2} color="#9098B1">
          {tanggal}
        </Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Text fontSize={12} fontFamily="Poppins-Regular" mb={2} color="#9098B1">
          Jumlah : {jumlah}
        </Text>
        <HStack>
          <Text
            fontSize={12}
            fontFamily="Poppins-Regular"
            mb={2}
            color="#9098B1">
            Total Harga :{' '}
          </Text>
          <Text fontSize={12} fontFamily="Poppins-Regular" mb={2}>
            Rp. {harga}
          </Text>
        </HStack>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Button
          borderRadius={50}
          variant="outline"
          borderColor="#000"
          onPress={onPressDetails}>
          <Text mx={3}>Details</Text>
        </Button>
        <Text
          fontSize={12}
          fontFamily="Poppins-Regular"
          mb={2}
          my={2}
          color="#2AA952">
          {status}{' '}
        </Text>
      </HStack>
    </Box>
  );
};

export default CustomListPembelian;
