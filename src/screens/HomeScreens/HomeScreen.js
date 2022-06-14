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
import React from 'react';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  CustomBox,
  CustomDepoTerdekat,
  CustomHeader,
  CustomScrollImage,
} from '../../components/Home';

const HomeScreen = () => {
  // Function
  const onPressHubungkan = () => {
    console.warn('hubungkan');
  };
  const onPressMail = () => {
    console.warn('Mail');
  };
  const onPressBasket = () => {
    console.warn('Basket');
  };
  const onPressIsiUlang = () => {
    console.warn('Isi Ulang');
  };
  const onPressLihatSemua = () => {
    console.warn('Lihat Semua');
  };
  const onPressDepo = () => {
    console.warn('Lihat Depo');
  };

  return (
    <>
      <Center>
        {/* Header  */}
        <CustomHeader
          nameUser="Raisa"
          onPressMail={onPressMail}
          onPressBasket={onPressBasket}
        />
      </Center>
      <ScrollView bgColor="#F9F9F9">
        {/* Box */}
        <Center>
          <CustomBox onPressHubungkan={onPressHubungkan} />
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
        <Box marginTop={4}>
          <CustomDepoTerdekat
            nama="Depo Mama Ami"
            alamat="Jalan Wagir RT 17 RW 03 - Sidoarjo"
            jarak="0,5 km"
            onPressDepo={onPressDepo}
          />
          <CustomDepoTerdekat
            nama="Depo Mama Ami"
            alamat="Jalan Wagir RT 17 RW 03 - Sidoarjo"
            jarak="0,5 km"
            onPressDepo={onPressDepo}
          />
          <CustomDepoTerdekat
            nama="Depo Mama Ami"
            alamat="Jalan Wagir RT 17 RW 03 - Sidoarjo"
            jarak="0,5 km"
            onPressDepo={onPressDepo}
          />
          <CustomDepoTerdekat
            nama="Depo Mama Ami"
            alamat="Jalan Wagir RT 17 RW 03 - Sidoarjo"
            jarak="0,5 km"
            onPressDepo={onPressDepo}
          />
        </Box>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
