import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, StorageManager, ColorMode,extendTheme } from 'native-base';
import HomeScreen from './pages/Welcome/Welcome';
import {Wallet} from './pages/Wallet/Wallet';



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
const customTheme = extendTheme({ config });



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>    
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallets" component={Wallet}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}