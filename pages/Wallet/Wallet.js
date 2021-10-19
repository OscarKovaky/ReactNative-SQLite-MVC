import React,{useContext} from "react";
import {
  NativeBaseProvider,Center
} from 'native-base';
import WalletSeach from "./WalletSeach";
import WalletCreate from "./WalletCreate";
import WalletList from "./WalletList";
import {UserContext} from '../hooks/ContextDatauser';



const Wallet = ()=>{
  const {customTheme} = useContext(UserContext);
    return (
      <NativeBaseProvider theme={customTheme}>     
           <WalletList/>  
      </NativeBaseProvider>
    );
}



export {Wallet};