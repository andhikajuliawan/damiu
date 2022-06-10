import {Box, Text, ScrollView, Center, HStack, Divider} from 'native-base';
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
      <Logo title="Let’s Get Started" description="Create an new account" />

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

      <Box marginTop={4}></Box>

      <CustomButton
        onPressButton={onSubmitPressed}
        textButton="Sign In"
        bgColor="#3EADE2"
        width="95%"
        fontSize="lg"
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
        fontSize="md"
        variant="outline"
        color="#9098B1"
      />
      <CustomSocialMedia
        textButton="Login with Facebook
        "
        width="95%"
        fontSize="md"
        variant="outline"
        color="#9098B1"
      />

      <CustomButton
        textButton="Reset Password ?"
        onPressButton={onResetPasswordPressed}
        variant="unstyled"
        color="#3EADE2"
        fontSize="md"
        button={true}
      />
      <CustomButton
        textButton="Sign Up"
        bgColor="#3EADE2"
        width="95%"
        fontSize="lg"
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
