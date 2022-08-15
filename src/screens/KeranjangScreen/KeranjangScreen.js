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
  Spinner,
  Center,
  Pressable,
} from 'native-base';
import React, {useEffect, useState, useContext} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomListProduk} from '../../components/Keranjang';
import {useNavigation} from '@react-navigation/native';

// untuk keperluan axios
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import {BASE_URL} from '../../config';
import {FlatList} from 'react-native';

const KeranjangScreen = ({route}) => {
  const navigation = useNavigation();

  const [listKeranjang, setListKeranjang] = useState([]);
  const [hargaOngkosKirim, setHargaOngkosKirim] = useState([]);
  const [hargaSubTotal, setHargaSubTotal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Alert Dialog
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  // Untuk Ambil Data akun
  const {userInfo} = useContext(AuthContext);

  useEffect(() => {
    getListCartProduk();

    const ongkosKirim = 2000;

    setHargaOngkosKirim(ongkosKirim);

    return () => {};
  }, []);

  const getListCartProduk = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/cart/${route.params.depo_id}`, {
        headers: {Authorization: `Bearer ${userInfo.token}`},
      })
      .then(res => res.data)
      .then(data => setListKeranjang(data.data))
      .catch(e => {
        console.log(`register error ${e}`);
      });
    setIsLoading(false);
  };

  let subTotal = 0;
  for (let index = 0; index < listKeranjang.length; index++) {
    subTotal += parseInt(listKeranjang[index].product_price);
  }

  const onPressBeli = () => {
    if (subTotal == 0) {
    } else {
      setIsOpen(!isOpen);
      onPressBeliProduk();
    }
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

  const onPressDeleteProduk = item => {
    axios
      .delete(`${BASE_URL}/cart/${item.id}`, {
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

    getListCartProduk();
  };
  const onPressAddProduk = item => {
    const hargaTambah =
      parseInt(item.product_price) +
      parseInt(item.product_price) / parseInt(item.product_amount);
    const tambah = parseInt(item.product_amount) + 1;

    console.log(tambah);
    console.log(hargaTambah);
    console.log(item.product_id);

    axios
      .put(
        `${BASE_URL}/cart/${item.id}`,
        {
          product_amount: tambah,
          product_price: hargaTambah,
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

    getListCartProduk();

    // console.warn('tambah');
  };
  const onPressReduceProduk = item => {
    if (item.product_amount == 1) {
    } else {
      const hargaKurang =
        parseInt(item.product_price) -
        parseInt(item.product_price) / parseInt(item.product_amount);
      const kurang = parseInt(item.product_amount) - 1;
      // const hasil = parseInt(item.product_price) / kurang;

      console.log(kurang);
      console.log(hargaKurang);

      axios
        .put(
          `${BASE_URL}/cart/${item.id}`,
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

      getListCartProduk();
    }
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

      {isLoading ? (
        <Center flex={1}>
          <Spinner color="#3DADE2" size="lg" />
        </Center>
      ) : (
        <ScrollView>
          {/* {listKeranjang.map((list, index) => (
            <CustomListProduk
              key={index}
              source={list}
              produk_id={list.id}
              namaProduk={list.namaProduk}
              jumlah={list.product_amount}
              hargaProduk={list.product_price}
              depo_id={depo_id}
            />
          ))} */}
          <FlatList
            data={listKeranjang}
            renderItem={({item, index}) => (
              <HStack
                bgColor="#fff"
                mx={4}
                borderRadius={10}
                shadow={3}
                py={2}
                mt={3}
                mb={1}>
                <Image
                  // source={require('../../../../assets/images/aqua.png')}
                  size="md"
                  alt="produk"
                />
                <VStack justifyContent="space-evenly" width="100%">
                  <HStack justifyContent="space-between" width="70%">
                    <Text fontFamily="Poppins-Bold" fontSize={14}>
                      {item.namaProduk}
                    </Text>
                    <Ionicons
                      name="trash-outline"
                      color="#9098B1"
                      size={25}
                      onPress={() => onPressDeleteProduk(item)}
                    />
                  </HStack>
                  <HStack justifyContent="space-between" width="70%">
                    <Text
                      fontFamily="Poppins-Medium"
                      fontSize={14}
                      color="#3DADE2">
                      Rp. {item.product_price}
                    </Text>
                    <HStack bgColor="#EBF0FF" borderRadius={5} p={1}>
                      <Pressable
                        bgColor="#fff"
                        borderLeftRadius={5}
                        onPress={() => onPressAddProduk(item)}>
                        <Ionicons
                          name="add-outline"
                          color="#9098B1"
                          size={23}
                        />
                      </Pressable>
                      <Text mx={4} color="#9098B1">
                        {item.product_amount}
                      </Text>
                      {item.product_amount == 1 ? (
                        <Pressable
                          bgColor="#EBF0FF"
                          borderRightRadius={5}
                          onPress={() => onPressReduceProduk(item)}>
                          <Ionicons
                            name="remove-outline"
                            color="#9098B1"
                            size={23}
                          />
                        </Pressable>
                      ) : (
                        <Pressable
                          bgColor="#fff"
                          borderRightRadius={5}
                          onPress={() => onPressReduceProduk(item)}>
                          <Ionicons
                            name="remove-outline"
                            color="#9098B1"
                            size={23}
                          />
                        </Pressable>
                      )}
                    </HStack>
                  </HStack>
                </VStack>
              </HStack>
            )}
            keyExtractor={item => item.id}
          />

          <Box
            mx={4}
            px={5}
            py={2}
            bg="#fff"
            borderRadius={10}
            shadow={3}
            mt={3}>
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
          <Box
            mx={4}
            px={5}
            py={2}
            bg="#fff"
            borderRadius={10}
            shadow={3}
            mt={3}>
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
          <Box
            mx={4}
            px={5}
            py={2}
            bg="#fff"
            borderRadius={10}
            shadow={3}
            mt={3}>
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
          {subTotal == 0 ? (
            <Button mx={4} bgColor="#9098B1" mt={4} mb={4} borderRadius={10}>
              <Text fontSize={14} color="#fff" fontFamily="Poppins-Bold" my={1}>
                Beli
              </Text>
            </Button>
          ) : (
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
          )}

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
      )}
    </Box>
  );
};

export default KeranjangScreen;
