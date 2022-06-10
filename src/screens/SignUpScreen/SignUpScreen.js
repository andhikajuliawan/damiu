import {Box, Text, ScrollView, Center} from 'native-base';
import React, {useState} from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';

// components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../components/Logo';
import CustomSocialMedia from '../../components/CustomSocialMedia/CustomSocialMedia';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('SignIn');
  };
  const onHomePressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView bgColor="white">
      <Logo title="Let’s Get Started" description="Create an new account" />
      <CustomInput
        variant="outline"
        placeholder="Full Name"
        width="95%"
        size="lg"
        value={username}
        setValue={setUsername}
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
        placeholder="Password"
        width="95%"
        size="lg"
        value={password}
        setValue={setPassword}
      />
      <CustomInput
        variant="outline"
        placeholder="Password Again"
        width="95%"
        size="lg"
        value={repeatPassword}
        setValue={setRepeatPassword}
      />
      <Box marginTop={4}></Box>
      <CustomButton
        onPressButton={onSubmitPressed}
        textButton="Sign Up"
        bgColor="#3EADE2"
        width="95%"
        fontSize="lg"
        onPressText={onHomePressed}
        text="have a account ? "
        textLink="Sign In"
        color="white"
        button={true}
        linkButton={true}
      />
    </ScrollView>
  );
};

export default SignUpScreen;
