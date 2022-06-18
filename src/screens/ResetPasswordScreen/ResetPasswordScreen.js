import {Box, ScrollView, Text} from 'native-base';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Components
import {CustomButton, CustomInput, Logo} from '../../components/Authentication';

const ResetPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRepeatPassword, setNewRepeatPassword] = useState('');
  const val = useContext(AuthContext);

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView bgColor="white">
      <Box paddingY={10}>
        <Logo
          title="Input your password"
          description="Please Enter Your New Password "
        />
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

        <Box ml={5} my={1} justifyContent="center">
          <Text ml={1} color="#FF0000" fontFamily="Poppins-Regular">
            {val}
          </Text>
        </Box>

        <CustomInput
          variant="outline"
          placeholder="New Password"
          width="90%"
          size="md"
          value={newPassword}
          setValue={setNewPassword}
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
          placeholder="New Password Again"
          width="90%"
          size="md"
          value={newRepeatPassword}
          setValue={setNewRepeatPassword}
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
          onPressButton={onSignInPressed}
          textButton="Confirm Password"
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
          width="95%"
          fontSize={15}
          marginTop={3}
          onPressText={onSignInPressed}
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

export default ResetPasswordScreen;
