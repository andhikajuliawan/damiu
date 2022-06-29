import {Image, Text, Box, ScrollView, HStack, VStack, Flex} from 'native-base';
import React, {useState} from 'react';
import {
  CustomDepoTerdekat,
  CustomHeader,
  CustomListProduk,
} from '../../components/Store';

import {useNavigation} from '@react-navigation/native';

const ProdukScreen = ({route}) => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const onPressMail = () => {
    console.warn('mail');
  };
  const onPressBasket = () => {
    navigation.navigate('Keranjang');
  };
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressSearch = () => {
    // render halaman
  };
  const onPressAddProduct = () => {
    console.warn('product ditambahkan');
  };

  // Data Dummy Store
  const listProduk = [];
  for (let index = 0; index < 10; index++) {
    listProduk.push({
      nama: 'Air Minum - ' + [index + 1],
      harga: [index + 3000],
      stock: [index + 2],
      // gambar: require('../../../assets/images/icon-shop.png'),
    });
  }

  // membatasi teks di Place Holder
  const placeholder = `cari di  ${route.params.nama}`;

  return (
    <Box px={3} flex={1} bgColor="#fff">
      <CustomHeader
        onPressMail={onPressMail}
        onPressBasket={onPressBasket}
        onPressBack={onPressBack}
        value={search}
        setValue={setSearch}
        onPressSearch={onPressSearch}
        placeholder={placeholder.substring(0, 20) + '.....'}
      />
      <HStack
        alignItems="center"
        bgColor="white"
        shadow={3}
        marginX={0.5}
        py={2}
        borderRadius="xl">
        <Image
          source={require('../../../assets/images/icon-shop.png')}
          size="sm"
          alt="icon-shop"
          mx={3}
        />
        <VStack>
          <Text fontSize={14} fontFamily="Poppins-Regular">
            {route.params.nama}
          </Text>
          <Text fontSize={10} fontFamily="Poppins-Regular">
            {route.params.alamat}
          </Text>
        </VStack>
      </HStack>
      <ScrollView bgColor="#fff" showsVerticalScrollIndicator={false}>
        <Text fontFamily="Poppins-Bold" my={5}>
          Semua Produk
        </Text>
        <Flex direction="row" flexWrap="wrap" justifyContent="space-around">
          {listProduk.map((produk, index) => (
            <CustomListProduk
              key={index}
              source={produk}
              // digunakan mengambil gambar
              // gambar={produk.gambar}
              nama={produk.nama}
              harga={produk.harga}
              stock={produk.stock}
              onPressAddProduct={onPressAddProduct}
            />
          ))}
        </Flex>
      </ScrollView>
    </Box>
  );
};

export default ProdukScreen;
