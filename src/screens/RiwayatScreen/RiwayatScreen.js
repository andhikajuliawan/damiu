import {View, Text, Box, HStack, Divider, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomListPembelian from '../../components/Riwayat/CustomListPembelian/CustomListPembelian';
import {useNavigation} from '@react-navigation/native';
import OrderDetailsScreen from '../OrderDetailsScreen';

const RiwayatScreen = () => {
  const navigation = useNavigation();

  const [listRiwayatPembelian, setListRiwayatPembelian] = useState([]);

  useEffect(() => {
    // Data Dummy
    const listPembelian = [
      {order: 6475, tanggal: '14-05-2022', jumlah: 1, harga: 17000},
      {order: 6476, tanggal: '16-05-2022', jumlah: 5, harga: 20000},
    ];

    setListRiwayatPembelian(listPembelian);

    return () => {};
  }, []);

  const onPressDeatils = () => {
    navigation.navigate('OrderDetails');
  };

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
          Riwayat
        </Text>
      </HStack>
      <Divider thickness={0.5} />
      {/* <CustomListPembelian
  onPressDetails={onPressDeatils}
  /> */}
      {listRiwayatPembelian.map((list, index) => (
        <CustomListPembelian
          key={index}
          source={list}
          order={list.order}
          tanggal={list.tanggal}
          jumlah={list.jumlah}
          harga={list.harga}
          onPressDetails={onPressDeatils}
        />
      ))}
    </Box>
  );
};

export default RiwayatScreen;
