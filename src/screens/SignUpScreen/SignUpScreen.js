import {Box, Text, ScrollView, Center} from 'native-base';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Components
import {
  CustomButton,
  CustomInput,
  CustomSocialMedia,
  DividerCostum,
  Logo,
} from '../../components/Authentication';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [customer_name, setCustomerName] = useState('');
  const [customer_email, setCustomerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const {register} = useContext(AuthContext);

  const navigation = useNavigation();

  // const onSubmitPressed = () => {
  //   navigation.navigate('SignIn');
  // };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView bgColor="white">
      <Box paddingY={10}>
        <Logo title="Let’s Get Started" description="Create an new account" />
        <CustomInput
          variant="outline"
          placeholder="Username"
          width="90%"
          size="md"
          value={username}
          setValue={setUsername}
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
          placeholder="Full Name"
          width="90%"
          size="md"
          value={customer_name}
          setValue={setCustomerName}
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
          placeholder="Your Email"
          width="90%"
          size="md"
          value={customer_email}
          setValue={setCustomerEmail}
          type="text"
          icon="mail-outline"
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
          setValue={setPassword}
          type="password"
          icon="lock-closed-outline"
        />

        {/* <Box ml={5} my={1} justifyContent="center">
          <Text ml={1} color="#FF0000" fontFamily="Poppins-Regular">
            {val}
          </Text>
        </Box> */}

        <CustomInput
          variant="outline"
          placeholder="Password Again"
          width="90%"
          size="md"
          value={repeatPassword}
          setValue={setRepeatPassword}
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
            register(username, customer_name, customer_email, password);
            navigation.navigate('SignIn');
          }}
          textButton="Sign Up"
          bgColor="#3EADE2"
          width="90%"
          fontSize={14}
          text="Don't have a account ? "
          textLink="Register"
          color="white"
          button={true}
          linkButton={false}
        />

        <CustomButton
          textButton="Sign In"
          bgColor="#3EADE2"
          width="90%"
          fontSize={14}
          marginTop={3}
          onPressText={onSignInPressed}
          text="Have a account ? "
          textLink="Sign In"
          color="white"
          button={false}
          linkButton={true}
        />
      </Box>
    </ScrollView>
  );
};

export default SignUpScreen;
