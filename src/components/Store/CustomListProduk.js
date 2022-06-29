import React from 'react';
import {VStack, Image, Text, HStack, Divider, Pressable} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomListProduk = ({nama, harga, stock, onPressAddProduct}) => {
  return (
    <VStack
      backgroundColor="#fff"
      shadow={3}
      width="45%"
      my={2}
      borderRadius={10}
      py={2}>
      <Image
        source={
          stock > 5
            ? require('../../../assets/images/aqua.png')
            : require('../../../assets/images/club.png')
        }
        alt="produk"
        size="xl"
        m="auto"
        mb={2}
      />
      <VStack px={3}>
        <Text fontFamily="Poppins-Regular" fontSize={14}>
          {nama}
        </Text>
        <Text fontFamily="Poppins-Bold" fontSize={14} color="#3DADE2">
          Rp {harga}
        </Text>
        <Text
          fontFamily="Poppins-Regular"
          fontSize={11}
          color={stock > 5 ? '#525252' : '#FF0000'}>
          Stock : {stock} buah
        </Text>
      </VStack>
      <Divider my={2} />
      <Pressable onPress={onPressAddProduct}>
        <HStack
          py={2}
          mb={1}
          mx={2}
          bgColor="#3DADE2"
          borderBottomRightRadius={10}
          borderTopLeftRadius={10}
          alignItems="center"
          justifyContent="center">
          <Ionicons name="add-outline" color="white" size={20} />
          <Text color="white" fontFamily="Poppins-Bold" fontSize={12} a>
            Keranjang
          </Text>
        </HStack>
      </Pressable>
    </VStack>
  );
};

export default CustomListProduk;
