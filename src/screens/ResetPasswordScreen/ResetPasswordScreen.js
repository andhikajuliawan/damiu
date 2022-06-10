import {Box, Text, ScrollView, Center} from 'native-base';
import React, {useState} from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';

// components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../components/Logo';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRepeatPassword, setNewRepeatPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('SignIn');
  };
  const onHomePressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView bgColor="white">
      <Logo
        title="Input your password"
        description="Please Enter Your New Password "
      />
      <CustomInput
        variant="outline"
        placeholder="Your Email"
        width="95%"
        size="lg"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        variant="outline"
        placeholder="New Password"
        width="95%"
        size="lg"
        value={newPassword}
        setValue={setNewPassword}
      />
      <CustomInput
        variant="outline"
        placeholder="New Password Again"
        width="95%"
        size="lg"
        value={newRepeatPassword}
        setValue={setNewRepeatPassword}
      />
      <Box marginTop={4}></Box>
      <CustomButton
        onPressButton={onSubmitPressed}
        textButton="Confirm Password"
        bgColor="#3EADE2"
        width="95%"
        fontSize="lg"
        onPressText={onHomePressed}
        text="have a account ? "
        textLink="SignUp"
        button={true}
        linkButton={true}
        color="white"
      />
    </ScrollView>
  );
};

export default ResetPasswordScreen;
