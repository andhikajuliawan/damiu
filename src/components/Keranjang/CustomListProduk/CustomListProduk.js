import React, {useEffect, useState} from 'react';
import {HStack, Image, VStack, Text, Box, Pressable} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomListProduk = ({
  onPressDeleteProduk,
  namaProduk,
  hargaProduk,
  jumlah,
}) => {
  const [number, setNumber] = useState();
  const [harga, setHarga] = useState();

  useEffect(() => {
    setNumber(jumlah);
    setHarga(hargaProduk);
    return () => {};
  }, []);

  const onPressAddProduk = () => {
    setNumber(number + 1);
    setHarga(harga + harga / number);
  };
  const onPressReduceProduk = () => {
    if (number == 1) {
    } else {
      setNumber(number - 1);
      setHarga(harga - harga / number);
    }
  };

  return (
    <HStack bgColor="#fff" mx={4} borderRadius={10} shadow={3} py={2} mt={3}>
      <Image
        source={require('../../../../assets/images/aqua.png')}
        size="md"
        alt="produk"
      />
      <VStack justifyContent="space-evenly" width="100%">
        <HStack justifyContent="space-between" width="70%">
          <Text fontFamily="Poppins-Bold" fontSize={14}>
            {namaProduk}
          </Text>
          <Ionicons
            name="trash-outline"
            color="#9098B1"
            size={25}
            onPress={onPressDeleteProduk}
          />
        </HStack>
        <HStack justifyContent="space-between" width="70%">
          <Text fontFamily="Poppins-Medium" fontSize={14} color="#3DADE2">
            Rp. {harga}
          </Text>
          <HStack bgColor="#EBF0FF" borderRadius={5} p={1}>
            <Pressable
              bgColor="#fff"
              borderLeftRadius={5}
              onPress={onPressAddProduk}>
              <Ionicons name="add-outline" color="#9098B1" size={23} />
            </Pressable>
            <Text mx={4} color="#9098B1">
              {number}
            </Text>
            <Pressable
              bgColor="#fff"
              borderRightRadius={5}
              onPress={onPressReduceProduk}>
              <Ionicons name="remove-outline" color="#9098B1" size={23} />
            </Pressable>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CustomListProduk;
