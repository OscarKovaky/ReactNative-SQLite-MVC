import React, { useState } from 'react';
import { Text, View ,useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, StorageManager, ColorMode,extendTheme, useColorMode} from 'native-base';
import HomeScreen from './pages/Welcome/Welcome';
import { SettingsScreen } from './pages/Settings/SettingsScreen';
import {Wallet} from './pages/Wallet/Wallet';
import {UserContext} from "./pages/hooks/ContextDatauser"
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
const customTheme = extendTheme({ config });
  


export default function App() {
  const  scheme  =   useColorScheme();
  const [user,setUser]  = useState({
    data: "Oscar",
    correo: "correo"
  })

  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <UserContext.Provider value={{user,useState,customTheme}}>
      <NavigationContainer >
        <Tab.Navigator
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Tab.Screen name="Home" component={HomeScreen}
           options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          
          />
          <Tab.Screen name="Wallets" component={Wallet} 
           options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
          
          />
          <Tab.Screen name="Settings" component={SettingsScreen} 
           options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color="#900" size={26} />
            ),
          }}
          
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}