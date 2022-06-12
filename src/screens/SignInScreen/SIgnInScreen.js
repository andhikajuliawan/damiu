import {Box, Text, ScrollView, Center, HStack, Divide} from 'native-base';
import React, {useState} from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';

// components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../components/Logo';
import CustomSocialMedia from '../../components/CustomSocialMedia/CustomSocialMedia';
import DividerCostum from '../../components/DividerCostum/DividerCostum';

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
    <ScrollView bgColor="white">
      <Logo title="Let’s Get Started" description="Sign in to continue" />

      <CustomInput
        variant="outline"
        placeholder="Your Email"
        width="95%"
        size="lg"
        value={email}
        setValue={setEmail}
        type="text"
        icon="mail-outline"
      />
      <CustomInput
        variant="outline"
        placeholder="Password"
        width="95%"
        size="lg"
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
        width="95%"
        fontSize={16}
        text="Don't have a account ? "
        textLink="Register"
        color="white"
        button={true}
        linkButton={false}
      />
      <DividerCostum />

      <CustomSocialMedia
        textButton="Login with Google"
        width="95%"
        fontSize={16}
        variant="outline"
        color="#9098B1"
        icon="logo-google"
        socialAccount={false}
      />
      <CustomSocialMedia
        textButton="Login with Facebook
        "
        width="95%"
        fontSize={16}
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
        fontSize={15}
        button={true}
      />
      <CustomButton
        textButton="Sign Up"
        bgColor="#3EADE2"
        width="95%"
        fontSize={15}
        marginTop={0}
        onPressText={onRegisterPressed}
        text="Don't have a account ? "
        textLink="Register"
        color="white"
        button={false}
        linkButton={true}
      />
    </ScrollView>
  );
};

export default SignInScreen;
