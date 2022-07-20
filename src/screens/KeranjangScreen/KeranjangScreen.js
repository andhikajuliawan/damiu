import {
  HStack,
  Text,
  Divider,
  Box,
  VStack,
  Image,
  Button,
  AlertDialog,
  ScrollView,
} from 'native-base';
import React, {useEffect, useState, useContext} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomListProduk} from '../../components/Keranjang';
import {useNavigation} from '@react-navigation/native';

// untuk keperluan axios
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import {BASE_URL} from '../../config';

const KeranjangScreen = ({route}) => {
  const navigation = useNavigation();

  const [listReload, setListReload] = useState([]);
  const [hargaOngkosKirim, setHargaOngkosKirim] = useState([]);
  const [hargaSubTotal, setHargaSubTotal] = useState([]);

  // Alert Dialog
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  // Untuk Ambil Data akun
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  useEffect(() => {
    // Data Dummy
    const listKeranjang = [
      {namaProduk: 'Club air Mineral 600ml', jumlah: 1, harga: 3500},
      {namaProduk: 'Club air Mineral 1000ml', jumlah: 1, harga: 6000},
    ];

    const ongkosKirim = 3000;
    const subTotal = 9500;

    setListReload(listKeranjang);
    setHargaOngkosKirim(ongkosKirim);
    setHargaSubTotal(subTotal);

    return () => {};
  }, []);

  return (
    <Box flex={1} bgColor="#fff">
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
      <ScrollView>
        {listReload.map((list, index) => (
          <CustomListProduk
            key={index}
            source={list}
            namaProduk={list.namaProduk}
            jumlah={list.jumlah}
            hargaProduk={list.harga}
            // onPressDeleteProduk={
            //   (reloadlist = () => {
            //     console.warn('delete');
            //     let index = listReload.indexOf(list);
            //     listReload.splice(index, 1);
            //     console.log(listReload);
            //   })

            // }
          />
        ))}
        <Box mx={4} px={5} py={2} bg="#fff" borderRadius={10} shadow={3} mt={3}>
          <Text
            fontSize={12}
            fontWeight="bold"
            fontFamily="Poppins-Bold"
            mb={2}>
            Dikirim dari Toko :
          </Text>
          <HStack alignItems="center">
            <Image
              source={require('../../../assets/images/icon-shop.png')}
              size="sm"
              alt="icon-shop"
            />
            <VStack marginLeft={2}>
              <Text fontSize={12} fontFamily="Poppins-Regular">
                {route.params.nama}
              </Text>
              <Text fontSize={10} fontFamily="Poppins-Regular">
                {route.params.alamat}
              </Text>
            </VStack>
          </HStack>
        </Box>

        <Box mx={4} px={5} py={2} bg="#fff" borderRadius={10} shadow={3} mt={3}>
          <Text fontSize={12} fontFamily="Poppins-Bold" mb={2}>
            Alamat Pengiriman
          </Text>
          <Text fontSize={12} fontFamily="Poppins-SemiBold" mb={2}>
            {userInfo.information.customer_name}
          </Text>
          <Text fontSize={10} fontFamily="Poppins-Regular" mb={2}>
            {userInfo.information.customer_phone}
          </Text>
          <Text fontSize={10} fontFamily="Poppins-Regular" mb={2}>
            {userInfo.information.customer_address}
          </Text>
        </Box>
        <Box mx={4} px={5} py={2} bg="#fff" borderRadius={10} shadow={3} mt={3}>
          <HStack justifyContent="space-between">
            <Text
              fontSize={12}
              fontFamily="Poppins-Regular"
              mb={2}
              color="#9098B1">
              Subtotal
            </Text>
            <Text fontSize={12} fontFamily="Poppins-Regular" mb={2}>
              Rp. 9500
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text
              fontSize={12}
              fontFamily="Poppins-Regular"
              mb={2}
              color="#9098B1">
              Diskon
            </Text>
            <Text fontSize={12} fontFamily="Poppins-Regular" mb={2}>
              Rp. 0
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text
              fontSize={12}
              fontFamily="Poppins-Regular"
              mb={2}
              color="#9098B1">
              Total Ongkos Kirim
            </Text>
            <Text fontSize={12} fontFamily="Poppins-Regular" mb={2}>
              Rp. {hargaOngkosKirim}
            </Text>
          </HStack>
          <Divider my={3} />
          <HStack justifyContent="space-between">
            <Text
              fontSize={12}
              fontFamily="Poppins-Bold"
              mb={2}
              color="#223263">
              Total Belanja
            </Text>
            <Text
              fontSize={12}
              fontFamily="Poppins-Bold"
              mb={2}
              color="#40BFFF">
              Rp. {hargaOngkosKirim + hargaSubTotal}
            </Text>
          </HStack>
        </Box>
        <Button
          mx={4}
          bgColor="#3DADE2"
          mt={4}
          mb={4}
          borderRadius={10}
          onPress={() => setIsOpen(!isOpen)}>
          <Text fontSize={14} color="#fff" fontFamily="Poppins-Bold" my={1}>
            Beli
          </Text>
        </Button>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.Body>
              <VStack>
                <HStack justifyContent="center">
                  <Text></Text>
                  <Image
                    source={require('../../../assets/images/successIcon.png')}
                    alt="successIcon"
                    width={10}
                    height={10}
                    resizeMode="stretch"
                  />
                  <Text></Text>
                </HStack>

                <Text textAlign="center" my={3}>
                  Pemesanan Sukses
                </Text>
                <Button
                  borderRadius={50}
                  size="sm"
                  bgColor="#3DADE2"
                  onPress={
                    (onClose,
                    () => {
                      navigation.navigate('Home');
                    })
                  }>
                  oke
                </Button>
              </VStack>
            </AlertDialog.Body>
          </AlertDialog.Content>
        </AlertDialog>
      </ScrollView>
    </Box>
  );
};

export default KeranjangScreen;
