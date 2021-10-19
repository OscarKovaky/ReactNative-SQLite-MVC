import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, HStack } from "native-base";



const  SearchBarWallet = ()=>{
  return (
  
      <HStack width="100%" space={5}>
       
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
             
            />
          }
        />
      </HStack>
     
  )
}

export default SearchBarWallet;