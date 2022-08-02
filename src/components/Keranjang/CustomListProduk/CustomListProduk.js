import React, {useEffect, useState, useContext} from 'react';
import {HStack, Image, VStack, Text, Box, Pressable} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../../../context/AuthContext';
import axios from 'axios';
import {BASE_URL} from '../../../config';

import {useNavigation} from '@react-navigation/native';

const CustomListProduk = ({
  namaProduk,
  hargaProduk,
  jumlah,
  produk_id,
  depo_id,
}) => {
  const navigation = useNavigation();

  const [number, setNumber] = useState();
  const [harga, setHarga] = useState();

  useEffect(() => {
    setNumber(parseInt(jumlah));
    setHarga(parseInt(hargaProduk));
    return () => {};
  }, []);

  const onPressAddProduk = () => {
    const tambah = number + 1;
    setNumber(tambah);
    const hargaTambah = harga + harga / number;
    setHarga(hargaTambah);

    // axios
    //   .put(
    //     `${BASE_URL}/cart/${produk_id}`,
    //     {
    //       product_amount: tambah,
    //       product_price: hargaTambah,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${userInfo.token}`,
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   )
    //   .then(res => console.log(res))
    //   .catch(e => {
    //     console.log(`register error ${e}`);
    //   });
  };
  const onPressReduceProduk = () => {
    if (number == 1) {
    } else {
      const kurang = number - 1;
      setNumber(kurang);
      const hargaKurang = harga - harga / number;
      setHarga(hargaKurang);

      axios
        .put(
          `${BASE_URL}/cart/${produk_id}`,
          {
            product_amount: kurang,
            product_price: hargaKurang,
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        )
        .then(res => console.log(res))
        .catch(e => {
          console.log(`register error ${e}`);
        });
    }
  };
  const onPressDeleteProduk = () => {
    axios
      .delete(`${BASE_URL}/cart/${produk_id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => console.log(res))
      .catch(e => {
        console.log(`register error ${e}`);
      });

    getListKeranjang(depo_id);
  };

  const {userInfo} = useContext(AuthContext);

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
