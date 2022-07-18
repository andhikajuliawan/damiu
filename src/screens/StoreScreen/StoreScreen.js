import {View, Text, Box, ScrollView} from 'native-base';
import React, {useState} from 'react';
import {CustomDepoTerdekat, CustomHeader} from '../../components/Store';

import {useNavigation} from '@react-navigation/native';

const StoreScreen = () => {
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
    navigation.navigate('Riwayat');
  };

  // Data Dummy Store
  const listDepo = [];
  for (let index = 0; index < 10; index++) {
    listDepo.push({
      nama: 'Depo Mama Ami ke - ' + [index],
      alamat: 'Jalan Wagir RT ' + [index] + ' RW ' + [index] + ' - Sidoarjo',
      jarak: [index] + ' km',
    });
  }

  console.log(listDepo);

  return (
    <Box px={3} flex={1} bgColor="#fff">
      <CustomHeader
        onPressMail={onPressMail}
        // onPressBasket={onPressBasket}
        onPressBack={onPressBack}
        value={search}
        setValue={setSearch}
        onPressSearch={onPressSearch}
        placeholder="Cari Depot Terdekat"
      />
      <ScrollView
        marginBottom={70}
        bgColor="#fff"
        showsVerticalScrollIndicator={false}>
        <Text fontSize={14} fontWeight="bold" my={3}>
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

export default StoreScreen;
