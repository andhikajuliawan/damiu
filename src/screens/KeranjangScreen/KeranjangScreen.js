import {HStack, Text, Divider, Box} from 'native-base';
import React, {useEffect, useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomListProduk} from '../../components/Keranjang';
import {useNavigation} from '@react-navigation/native';

const KeranjangScreen = () => {
  const navigation = useNavigation();

  const [listReload, setListReload] = useState([]);

  useEffect(() => {
    // Data Dummy
    const listKeranjang = [
      {namaProduk: 'Club air Mineral 600ml', jumlah: 1, harga: 3500},
      {namaProduk: 'Club air Mineral 1000ml', jumlah: 1, harga: 6000},
    ];

    setListReload(listKeranjang);
    return () => {};
  }, []);

  return (
    <Box>
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
          Keranjang
        </Text>
      </HStack>
      <Divider thickness={0.5} />
      {listReload.map((list, index) => (
        <CustomListProduk
          key={index}
          source={list}
          namaProduk={list.namaProduk}
          jumlah={list.jumlah}
          hargaProduk={list.harga}
          onPressDeleteProduk={
            (reloadlist = () => {
              console.warn('delete');
              let index = listReload.indexOf(list);
              listReload.splice(index, 1);
              console.log(listReload);
            })
          }
        />
      ))}
    </Box>
  );
};

export default KeranjangScreen;
