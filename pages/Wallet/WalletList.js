import {
  FlatList,
  Box,
  Text,
  Heading,
  Stack,
  Center,
  Flex,
  Avatar,
  Badge,
  Divider,
  View,
  Button
} from 'native-base';
import React from 'react';
import {WalletsList} from '../transactionsWelcome/Actions';


const ListWallet = () => {
  
  const list = WalletsList()

  return (
    <Box
      flex={1}
      >
      <Heading  color="black" textAlign="center" fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>Wallets</Heading>
      <FlatList
        data={list}
        renderItem={({item}) => (
            <View   >   
            <Flex
              direction="row"          
              mb="2.5"
              mt="1.5"
          >
              <Box
                
                p="3"
                _text={{
                  fontSize: 'md',
                  fontWeight: 'medium',
                  color: 'warmGray.50',
                  letterSpacing: 'lg',
                }}>
                <Center size="12" bg="primary.100">
                <Button 
                      height={50}
                      width={50}     
                      borderRadius={120}       
                      
                    colorScheme= "green"   
                    _text={{color: 'white'}}        
                    >
                  Confirmar
                  </Button> 
                </Center>
              
                <Center size="12" bg="primary.100">
                <Button 
                      height={50}
                      width={50}     
                      borderRadius={120}       
                      
                    colorScheme= "green"   
                    _text={{color: 'white'}}        
                    >
                  Confirmar
                  </Button> 
                </Center>
              </Box>
              <Box
                bg="primary.500"
                p="3"
                flex={1}
                _text={{
                  fontSize: 'md',
                  fontWeight: 'medium',
                  color: 'warmGray.50',
                  letterSpacing: 'lg',
                }}>
                <Stack
                  direction="row"
                  flex={1}
                  mb="2.5"
                  mt="1.5"
                  space={2}
                  borderRadius={120}
                  _text={{
                    color: 'coolGray.800',
                  }}>
                  <Box  flex={1} >
                    <Text color="black">{item.name}</Text>
                  </Box>

                  <Box  flex={1}>
                    <Text color="black">{item.balance}</Text>
                  </Box>
                   <Box  flex={1} >
                        
                  </Box>
                </Stack>
                <Center w="180" h="50" bg="primary.200">
                <Text color="black">{item.dateCreation}</Text>
                
               
                </Center>
              </Box>
            </Flex>
            <Divider/>
         </View>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default ListWallet;
