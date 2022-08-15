import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

// untuk keperluan axios
import {AuthContext} from '../../context/AuthContext';
import {StoreContext} from '../../context/StoreContext';
import axios from 'axios';
import {BASE_URL} from '../../config';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  CustomBox,
  CustomDepoTerdekat,
  CustomHeader,
  CustomScrollImage,
} from '../../components/Home';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [listDepo, setListDepo] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/depo`, {
        headers: {Authorization: `Bearer ${userInfo.token}`},
      })
      .then(res => res.data)
      .then(data => setListDepo(data.data))

      .catch(e => {
        console.log(`register error ${e}`);
      });

    return () => {};
  }, []);

  // Function
  const onPressHubungkan = () => {
    console.warn('hubungkan');
  };
  const onPressMail = () => {
    console.warn('Mail');
  };
  const onPressBasket = () => {
    navigation.navigate('Keranjang');
  };
  const onPressIsiUlang = () => {
    console.warn('Isi Ulang');
  };
  const onPressLihatSemua = () => {
    console.warn('Lihat Semua');
  };
  const onPressDepo = depo => {
    console.warn('Lihat Depo');
    navigation.navigate('Produk', {
      nama: depo.depo_name,
      alamat: depo.depo_city,
      depo_id: depo.id,
    });
  };

  // Untuk Logout
  const {userInfo, isLoading, logout, listDepos, getListDepo} =
    useContext(AuthContext);

  // Data Dummy Store
  // const listDepoDumy = [];
  // for (let index = 0; index < 10; index++) {
  //   listDepo.push({
  //     nama: 'Depo Mama Ami ke - ' + [index],
  //     alamat: 'Jalan Wagir RT ' + [index] + ' RW ' + [index] + ' - Sidoarjo',
  //     jarak: [index] + ' km',
  //   });
  // }

  return (
    <Box bgColor="#fff" flex={1}>
      <Center>
        {/* Header  */}
        <CustomHeader
          nameUser={userInfo.user.username}
          onPressMail={onPressMail}
          onPressBasket={onPressBasket}
        />
      </Center>
      <ScrollView
        bgColor="#F9F9F9"
        showsVerticalScrollIndicator={false}
        marginBottom={70}>
        {/* Box */}
        <Center>
          <CustomBox />
        </Center>

        {/* Scroll Image */}
        <CustomScrollImage />

        {/* Two button */}
        <HStack marginX={4} marginY={6} justifyContent="space-evenly">
          <Button
            rounded="full"
            bgColor="#fff"
            shadow={1}
            width="48%"
            onPress={onPressIsiUlang}>
            <HStack alignItems="center" marginY={1}>
              <FontAwesomeIcon name="recycle" size={20} color="#3DADE2" />
              <Text fontSize={14} marginLeft={3} fontFamily="Poppins-Regular">
                Isi Ulang
              </Text>
            </HStack>
          </Button>
          <Button
            rounded="full"
            bgColor="#fff"
            shadow={1}
            width="48%"
            onPress={onPressLihatSemua}>
            <HStack alignItems="center" marginY={1}>
              <FontAwesomeIcon name="compress" size={20} color="#3EADE2" />
              <Text fontSize={14} marginLeft={3} fontFamily="Poppins-Regular">
                Lihat Semua
              </Text>
            </HStack>
          </Button>
        </HStack>

        {/* Depo terdekat */}
        <Text fontSize={14} fontWeight="bold" marginX={4} mb={3}>
          Depo Terdekat Untuk Anda
        </Text>
        {listDepo.map((depo, index) => (
          <CustomDepoTerdekat
            key={index}
            source={depo}
            nama={depo.depo_name}
            alamat={depo.depo_city}
            // onPressDepo={() => {
            //   navigation.navigate('Produk', {
            //     nama: depo.depo_name,
            //     alamat: depo.depo_city,
            //     depo_id: depo.id,
            //   });
            // }}
            onPressDepo={() => onPressDepo(depo)}
          />
        ))}
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
