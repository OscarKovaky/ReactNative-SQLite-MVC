import React, { useEffect, useState,useContext } from "react";
import {Box,VStack,Text,Avatar,Stack,Heading,NativeBaseProvider,Center,Button,HStack,AspectRatio,Spacer,Divider, ScrollView} from "native-base";
import {UserContext} from "../hooks/ContextDatauser"







const HomeScreen  =  ()=> {
  const {user,customTheme} =  useContext(UserContext);
  

    return (
      <NativeBaseProvider theme={customTheme}>
        <ScrollView
      _contentContainerStyle={{
       
        mb: "4"
      }}
    >
      <Center 
      marginTop="5px"
     
      > 
    <Box
      rounded="lg"
      overflow="hidden"
      width="90%"
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <Box>
        <AspectRatio ratio={16 / 9}>
        <Center>
        <Avatar
        bg="amber.500"
        size="xl"
        position="relative"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      >
        AK
       
        </Avatar>
        </Center>
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5"
        >
          Hola 
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
           Buenos Dias {user.data}
          </Heading>
          <Text
            fontSize="sm"
            _light={{ color: 'violet.500' }}
            _dark={{ color: 'violet.300' }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Box flexDirection="row" alignSelf="center" >
            <Button 
                height={50}
                width={50}     
                borderRadius={360}       
             
                
           >
              
            </Button> 
            <Spacer/>
            <Button 
                height={50}
                width={50}     
                borderRadius={360}       
                
           >
            </Button> 
            <Spacer/>
            <Button 
                height={50}
                width={50}     
                borderRadius={360}       
                
           >
            </Button> 
         </Box>   
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="gray.500" fontWeight="400">
             ultimo abono realizado a su cuenta hace 6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
      </Center>   
      <Heading textAlign="center" mb="1">
    
      </Heading>
      <Center>  
     
       
      <VStack space={2} alignItems="center" >
      <Heading textAlign="center" mb="1">
        Actividad Reciente:
      </Heading>
      <Center w="80" h="40" bg="primary.500" rounded="md" shadow={3} />
      <Center w="80" h="20" bg="secondary.500" rounded="md" shadow={3} />
      <Center w="80" h="20" bg="emerald.500" rounded="md" shadow={3} />
    
    </VStack>
 
   <Heading textAlign="center" mb="1"></Heading>
   </Center>  

    
       </ScrollView>
    </NativeBaseProvider>
    );
  }



  export default HomeScreen;