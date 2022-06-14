import {Box, Text, ScrollView, Center, HStack, Divide} from 'native-base';
import React, {useState} from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';

// components
import {
  CustomButton,
  CustomInput,
  CustomSocialMedia,
  DividerCostum,
  Logo,
} from '../../components/Authentication';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };
  const onResetPasswordPressed = () => {
    navigation.navigate('ResetPassword');
  };
  const onRegisterPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView bgColor="white" flex={1}>
      <Box paddingY={10}>
        <Logo title="Welcome to DAMIU" description="Sign in to continue" />

        <CustomInput
          variant="outline"
          placeholder="Your Email"
          width="90%"
          size="md"
          value={email}
          setValue={setEmail}
          type="text"
          icon="mail-outline"
        />
        <CustomInput
          variant="outline"
          placeholder="Password"
          width="90%"
          size="md"
          value={password}
          setValue={setPassword}
          type="password"
          icon="lock-closed-outline"
        />

        <Box marginTop={4}></Box>

        <CustomButton
          onPressButton={onSubmitPressed}
          textButton="Sign In"
          bgColor="#3EADE2"
          width="90%"
          fontSize={14}
          text="Don't have a account ? "
          textLink="Register"
          color="white"
          button={true}
          linkButton={false}
        />
        <DividerCostum />

        <CustomSocialMedia
          textButton="Login with Google"
          width="90%"
          fontSize={14}
          variant="outline"
          color="#9098B1"
          icon="logo-google"
          socialAccount={false}
        />
        <CustomSocialMedia
          textButton="Login with Facebook
  "
          width="90%"
          fontSize={14}
          variant="outline"
          color="#9098B1"
          icon="logo-facebook"
          socialAccount={true}
        />

        <CustomButton
          textButton="Reset Password ?"
          onPressButton={onResetPasswordPressed}
          variant="unstyled"
          color="#3EADE2"
          fontSize={14}
          button={true}
        />
        <CustomButton
          textButton="Sign Up"
          bgColor="#3EADE2"
          width="95%"
          fontSize={14}
          marginTop={0}
          onPressText={onRegisterPressed}
          text="Don't have a account ? "
          textLink="Register"
          color="white"
          button={false}
          linkButton={true}
        />
      </Box>
    </ScrollView>
  );
};

export default SignInScreen;
