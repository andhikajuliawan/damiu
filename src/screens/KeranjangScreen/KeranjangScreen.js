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

  const [listKeranjang, setListKeranjang] = useState([]);
  const [hargaOngkosKirim, setHargaOngkosKirim] = useState([]);
  const [hargaSubTotal, setHargaSubTotal] = useState([]);

  // Alert Dialog
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  // Untuk Ambil Data akun
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/cart/${route.params.depo_id}`, {
        headers: {Authorization: `Bearer ${userInfo.token}`},
      })
      .then(res => res.data)
      .then(data => setListKeranjang(data.data))
      .catch(e => {
        console.log(`register error ${e}`);
      });

    const ongkosKirim = 2000;

    setHargaOngkosKirim(ongkosKirim);

    return () => {};
  }, []);

  let subTotal = 0;
  for (let index = 0; index < listKeranjang.length; index++) {
    subTotal += parseInt(listKeranjang[index].product_price);
  }

  const onPressBeli = () => {
    setIsOpen(!isOpen);

    onPressBeliProduk();
  };

  const onPressBeliProduk = () => {
    console.log(
      userInfo.information.id,
      route.params.depo_id,
      listKeranjang.length,
      hargaOngkosKirim + subTotal,
      userInfo.information.customer_address,
    );

    axios
      .post(
        `${BASE_URL}/customer_order`,
        {
          customer_id: userInfo.information.id,
          depo_id: route.params.depo_id,
          order_total_product: listKeranjang.length,
          order_price: hargaOngkosKirim + subTotal,
          order_location: userInfo.information.customer_address,
          order_status: 'Berhasil',
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
  };

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
        {listKeranjang.map((list, index) => (
          <CustomListProduk
            key={index}
            source={list}
            produk_id={list.id}
            namaProduk={list.namaProduk}
            jumlah={list.product_amount}
            hargaProduk={list.product_price}
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
        {/* <Button onPress={testing}>tes</Button> */}
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
              Rp. {subTotal}
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
              Rp. {hargaOngkosKirim + subTotal}
            </Text>
          </HStack>
        </Box>
        <Button
          mx={4}
          bgColor="#3DADE2"
          mt={4}
          mb={4}
          borderRadius={10}
          onPress={onPressBeli}>
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
