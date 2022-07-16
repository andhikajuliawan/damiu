import {Button, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDepoTerdekat = ({nama, alamat, jarak, onPressDepo}) => {
  return (
    <Button
      bgColor="white"
      shadow={1}
      marginBottom={2}
      marginX={0.5}
      onPress={onPressDepo}>
      <HStack alignItems="center" justifyContent="space-around" width="100%">
        <HStack alignItems="center">
          <Image
            source={require('../../../../assets/images/icon-shop.png')}
            size="sm"
            alt="icon-shop"
          />
          <VStack marginLeft={2}>
            <Text fontSize={14} fontFamily="Poppins-Regular">
              {nama}
            </Text>
            <Text fontSize={10} fontFamily="Poppins-Regular">
              {alamat}
            </Text>
            <Text fontSize={12} fontFamily="Poppins-Regular">
              {jarak}
            </Text>
          </VStack>
        </HStack>

        <Ionicons name="chevron-forward-outline" color="#3DADE2" size={30} />
      </HStack>
    </Button>
  );
};

export default CustomDepoTerdekat;
