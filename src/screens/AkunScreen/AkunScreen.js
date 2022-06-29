import {HStack, Text, Divider, Image, VStack, Box} from 'native-base';
import React, {useState, useEffect} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const AkunScreen = () => {
  const navigation = useNavigation();

  const onPressEditAkun = () => {
    user.splice(0, 1);
    console.log(user[0]);
    user.push({
      nama: 'Achmad daffa',
      akun: '@AchmadDaffa ',
      birthday: '12 - 12 - 2001',
      email: 'achmaddaffa@gmail.com',
      phone: '4944737389999',
      address: 'Jalan rungkut Baru II No 4F surabaya',
    });
    console.log(user[0]);
    setNama(user[0].nama);
    setAkun(user[0].akun);
    setBirthday(user[0].birthday);
    setEmail(user[0].email);
    setPhone(user[0].phone);
    setAddress(user[0].address);
  };

  const [nama, setNama] = useState('');
  const [akun, setAkun] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    setNama(user[0].nama);
    setAkun(user[0].akun);
    setBirthday(user[0].birthday);
    setEmail(user[0].email);
    setPhone(user[0].phone);
    setAddress(user[0].address);

    return () => {};
  }, []);

  const user = [
    {
      nama: 'Pratama Ramadhani',
      akun: '@ramadhani059',
      birthday: '12 - 12 - 2000',
      email: 'pratamaramadhani059@gmail.com',
      phone: '4944737383999',
      address: 'Jalan Wagir Baru II No 4F Kwangsan Sedati Sidoarjo',
    },
  ];

  // memberi nomor +62
  const phoneEdit = user[0].phone;

  return (
    <Box>
      {/* <HStack mt={5} mb={4} alignItems="center" px={4}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          color="#9098B1"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text fontFamily="Poppins-Bold" fontSize={16} color="#223263" ml={3}>
          Profile
        </Text>
      </HStack>
      <Divider thickness={0.5} /> */}
      <Box px={4}>
        <HStack mt={10} alignItems="center" justifyContent="space-between">
          <HStack alignItems="center">
            <Image
              source={require('../../../assets/images/profile.png')}
              borderRadius={100}
              alt="profile"
              size="sm"
            />
            <VStack ml={3}>
              <Text color="#223263" fontFamily="Poppins-Bold" fontSize={16}>
                {nama}
              </Text>
              <Text color="#9098B1" fontFamily="Poppins-Regular" fontSize={12}>
                {akun}
              </Text>
            </VStack>
          </HStack>
          <Ionicons
            name="create-outline"
            size={25}
            color="#9098B1"
            fontWeight="bold"
            onPress={onPressEditAkun}
          />
        </HStack>
        <HStack
          mt={50}
          justifyContent="space-between"
          alignItems="center"
          width="100%">
          <HStack width="40%">
            <Ionicons name="calendar-outline" size={20} color="#40BFFF" />
            <Text
              ml={2}
              color="#223263"
              fontFamily="Poppins-Bold"
              fontSize={14}>
              Birthday
            </Text>
          </HStack>
          <Text
            textAlign="right"
            width="60%"
            color="#9098B1"
            fontFamily="Poppins-Regular"
            fontSize={12}>
            {birthday}
          </Text>
        </HStack>
        <HStack mt={4} justifyContent="space-between" width="100%">
          <HStack width="40%">
            <Ionicons name="mail-outline" size={20} color="#40BFFF" />
            <Text
              ml={2}
              color="#223263"
              fontFamily="Poppins-Bold"
              fontSize={14}>
              Email
            </Text>
          </HStack>
          <Text
            textAlign="right"
            width="60%"
            color="#9098B1"
            fontFamily="Poppins-Regular"
            fontSize={12}>
            {email}
          </Text>
        </HStack>
        <HStack
          mt={4}
          justifyContent="space-between"
          alignItems="center"
          width="100%">
          <HStack width="40%">
            <Ionicons name="phone-portrait-outline" size={20} color="#40BFFF" />
            <Text
              ml={2}
              color="#223263"
              fontFamily="Poppins-Bold"
              fontSize={14}>
              Phone Number
            </Text>
          </HStack>
          <Text
            textAlign="right"
            width="60%"
            color="#9098B1"
            fontFamily="Poppins-Regular"
            fontSize={12}>
            {'+62 ' + phone.substring(1, 13)}
          </Text>
        </HStack>
        <HStack mt={4} justifyContent="space-between" width="100%">
          <HStack width="40%">
            <Ionicons name="location-outline" size={20} color="#40BFFF" />
            <Text
              ml={2}
              width="60%"
              color="#223263"
              fontFamily="Poppins-Bold"
              fontSize={14}>
              Address
            </Text>
          </HStack>
          <Text
            textAlign="right"
            width="50%"
            color="#9098B1"
            fontFamily="Poppins-Regular"
            fontSize={12}>
            {address}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default AkunScreen;