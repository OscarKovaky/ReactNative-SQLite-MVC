import React from "react";
import {
  NativeBaseProvider,Center
} from 'native-base';
import WalletSeach from "./WalletSeach";
import WalletCreate from "./WalletCreate";
import WalletList from "./WalletList";




const Wallet = ()=>{
 
    return (
      <NativeBaseProvider>
        <Center flex={1} px={2}>
       <WalletList/>
      </Center> 
      </NativeBaseProvider>
    );
}



export {Wallet};