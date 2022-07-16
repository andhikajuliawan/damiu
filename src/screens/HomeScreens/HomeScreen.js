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
import React, {useContext} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import {AuthContext} from '../../context/AuthContext';

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
  // const onPressDepo = () => {
  //   console.warn('Lihat Depo');
  // };

  // Untuk Logout
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  // Data Dummy Store
  const listDepo = [];
  for (let index = 0; index < 10; index++) {
    listDepo.push({
      nama: 'Depo Mama Ami ke - ' + [index],
      alamat: 'Jalan Wagir RT ' + [index] + ' RW ' + [index] + ' - Sidoarjo',
      jarak: [index] + ' km',
    });
  }

  return (
    <Box>
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
        marginBottom={145}>
        {/* Box */}
        <Center>
          <CustomBox onPressHubungkan={logout} />
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
        <Text fontSize={14} fontWeight="bold" marginX={4}>
          Depo Terdekat Untuk Anda
        </Text>
        {listDepo.map((depo, index) => (
          <CustomDepoTerdekat
            key={index}
            source={depo}
            nama={depo.nama}
            alamat={depo.alamat}
            jarak={depo.jarak}
            onPressDepo={() => {
              navigation.navigate('Produk', {
                nama: depo.nama,
                alamat: depo.alamat,
              });
            }}
          />
        ))}
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
