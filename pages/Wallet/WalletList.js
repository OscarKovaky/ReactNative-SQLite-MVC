import { FlatList,Box,Text, Heading,ScrollView,Input,Icon} from "native-base"
import React,{ useEffect, useState} from "react"
import { WalletsList } from "../transactionsWelcome/Actions"
import SearchBarWallet from "./WalletSeach"




const ListWallet = ()=> {
    const [list,setList] = useState([])
    var result  = WalletsList()
   
    console.log("contenido de la lista"  + result)
    useEffect(()=>{     
        setList(result)  
    },[])

    const wallets =({item})=>{
        return (
            <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <Text>Id: {item.bankId}</Text>
            <Text>Name: {item.name}</Text>
            <Text>Balance: {item.balance}</Text>
            <Text>Address: {item.dateCreation}</Text>
            </Box>
        );
    }

    return (
        <Box safeArea flex={1} p={2} w="90%" mx="auto">
        <Heading fontSize="xl" p="4" pb="3">
       
        </Heading>  
      
          <FlatList
             data={list}
             renderItem={wallets}
             keyExtractor={item => item.id}
            >          
           </FlatList>      
         </Box>
    );
}


export default ListWallet