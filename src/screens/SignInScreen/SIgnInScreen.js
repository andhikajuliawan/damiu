import {
  Box,
  Text,
  ScrollView,
  Center,
  HStack,
  Divide,
  VStack,
} from 'native-base';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading, login} = useContext(AuthContext);

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
          placeholder="Username"
          width="90%"
          size="md"
          value={username}
          setValue={text => setUsername(text)}
          type="text"
          icon="person-outline"
        />
        {/* <Box ml={5} my={1} justifyContent="center">
          <Text ml={1} color="#FF0000" fontFamily="Poppins-Regular">
            {val}
          </Text>
        </Box> */}
        <CustomInput
          variant="outline"
          placeholder="Password"
          width="90%"
          size="md"
          value={password}
          setValue={text => setPassword(text)}
          type="password"
          icon="lock-closed-outline"
        />

        {/* <Box ml={5} my={1} justifyContent="center">
          <Text ml={1} color="#FF0000" fontFamily="Poppins-Regular">
            {val}
          </Text>
        </Box> */}

        <Box marginTop={4}></Box>

        <CustomButton
          onPressButton={() => {
            login(username, password);
          }}
          textButton="Sign In"
          bgColor="#3EADE2"
          width="90%"
          fontSize={14}
          text="Don't have a account ? "
          isLoading={isLoading}
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
