import {HStack, Divider, Text, Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {CustomListProduk} from '../../components/OrderDetails';

const OrderDetailsScreen = () => {
  const navigation = useNavigation();

  const [listProduk, setListProduk] = useState([]);

  useEffect(() => {
    // Data Dummy
    const listProduk = [
      {namaProduk: 'Club air Mineral 600ml', jumlah: 1, harga: 3500},
      {namaProduk: 'Club air Mineral 1000ml', jumlah: 1, harga: 6000},
    ];

    setListProduk(listProduk);
    return () => {};
  }, []);

  return (
    <Box bgColor="#fff" flex={1}>
      <HStack mt={5} mb={4} alignItems="center" px={4}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          color="#9098B1"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text fontFamily="Poppins-Bold" fontSize={16} color="#223263" ml={3}>
          Order Details
        </Text>
      </HStack>
      <Divider thickness={0.5} />
      <Box mx={4} px={5} py={4} bg="#fff" borderRadius={10} shadow={3} mt={3}>
        <HStack justifyContent="space-between">
          <Text fontSize={14} fontFamily="Poppins-Bold" mb={2} color="#223263">
            Order No 1974
          </Text>
          <Text
            fontSize={12}
            fontFamily="Poppins-Regular"
            mb={2}
            color="#9098B1">
            14-05-2022
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text
            fontSize={12}
            fontFamily="Poppins-Regular"
            mb={2}
            color="#9098B1">
            status :{' '}
          </Text>
          <HStack>
            <Text
              fontSize={12}
              fontFamily="Poppins-Regular"
              mb={2}
              color="#2AA952">
              Berhasil
            </Text>
          </HStack>
        </HStack>
      </Box>

      {listProduk.map((list, index) => (
        <CustomListProduk
          key={index}
          source={list}
          namaProduk={list.namaProduk}
          jumlah={list.jumlah}
          hargaProduk={list.harga}
        />
      ))}

      <Box mx={4} px={5} py={4} bg="#fff" borderRadius={10} shadow={3} mt={3}>
        <HStack justifyContent="space-between">
          <Text
            fontSize={10}
            fontFamily="Poppins-Regular"
            mb={2}
            color="#9098B1">
            Alamat :
          </Text>
          <Text
            fontSize={10}
            fontFamily="Poppins-Regular"
            mb={2}
            color="#000"
            width="60%"
            textAlign="left">
            Jalan Wagir Baru II No 4F Kwangsan Sedati Sidoarjo{' '}
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text
            fontSize={10}
            fontFamily="Poppins-Regular"
            mb={2}
            color="#9098B1">
            Metode Pembayaran :
          </Text>
          <HStack>
            <Text
              fontSize={10}
              fontFamily="Poppins-Regular"
              mb={2}
              color="#000"
              width="60%"
              textAlign="left">
              COD (Bayar Ditempat)
            </Text>
          </HStack>
        </HStack>
        <HStack justifyContent="space-between">
          <Text
            fontSize={10}
            fontFamily="Poppins-Regular"
            mb={2}
            color="#9098B1">
            Total Harga :
          </Text>
          <HStack>
            <Text
              fontSize={10}
              fontFamily="Poppins-Regular"
              mb={2}
              color="#000"
              width="60%"
              textAlign="left">
              Rp. 17000
            </Text>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default OrderDetailsScreen;
