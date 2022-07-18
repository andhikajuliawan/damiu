import {} from 'native-base';
import React, {useContext} from 'react';

// Screens
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreens';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SplashScreen from '../screens/SplashScreen';
import RiwayatScreen from '../screens/RiwayatScreen';
import AkunScreen from '../screens/AkunScreen';
import StoreScreen from '../screens/StoreScreen';
import ProdukScreen from '../screens/ProdukScreen';
import KeranjangScreen from '../screens/KeranjangScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {AuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {splashLoading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : userInfo.token ? (
          <>
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Store" component={StoreScreen} />
            <Stack.Screen name="Riwayat" component={RiwayatScreen} />
            <Stack.Screen name="Akun" component={AkunScreen} />
            <Stack.Screen name="Produk" component={ProdukScreen} />
            <Stack.Screen name="Keranjang" component={KeranjangScreen} />
            <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#3DADE2',
        tabBarInactiveTintColor: '#525252',
        tabBarStyle: {
          height: 70,
          // borderRadius: 20,
          position: 'absolute',
        },
        tabBarIconStyle: {marginTop: 10},
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 12,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="cart-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={RiwayatScreen}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="sync-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Akun"
        component={AkunScreen}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
