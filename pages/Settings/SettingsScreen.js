import React, {useContext, useState} from 'react';
import {
  Text,
  Center,
  VStack,
  Box,
  Button,
  Input,
  Divider,
  ScrollView,
  NativeBaseProvider,
  Heading,
  TextArea,
  Flex,
  Badge,
  Avatar,
  Stack,
  Select,
  CheckIcon

} from 'native-base';
import {UserContext} from '../hooks/ContextDatauser';
import {Header} from 'react-native/Libraries/NewAppScreen';

export function SettingsScreen() {
  const {customTheme} = useContext(UserContext);

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box>
          <VStack>
            <Center flex={1} >
              <Heading
                color="black" marginTop="2" marginBottom="5"
                fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
                Configuracion
              </Heading>
              <Divider my="2" />
              <Heading  marginTop="2" marginBottom="5"
                color="black"
                fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
                Datos Personales
              </Heading>
              <Text fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
                Nombre Completo
              </Text>
              <Input  marginTop="2" marginBottom="5"
                minWidth={300}
                mx="3"
                placeholder="Nombre"
                w={{
                  base: '70%',
                  md: '25%',
                }}
              />
              <Text fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
                Contraseña
              </Text>
              <Input  marginTop="2" marginBottom="5"
                 minWidth={300}
                mx="3"
                placeholder="Email"
                w={{
                  base: '70%',
                  md: '25%',
                }}
              />
              <Text fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>Bio</Text>
              <TextArea marginTop="2" marginBottom="5"
                h={20}
                minWidth={300}
                placeholder="Biografia"
                w={{
                  base: '70%',
                  md: '25%',
                }}
              />
            </Center>
            <Divider my="2" />
            <Center>
            <Heading
                color="black" marginTop="2" marginBottom="5"
                fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
                Foto de Perfil
              </Heading>  
              <Flex
            direction="row"
            mb="2.5"
            mt="1.5"
            _text={{
              color: "coolGray.800",
            }}
          >
             <Box
        bg="primary.500"
        p="3"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
         <Center size="32" bg="primary.100">
         <Avatar
        bg="pink.600"
        size="xl"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      >
        GG
      </Avatar>
          </Center>
      </Box>
      <Box
        bg="primary.500"
        p="3"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
         <Stack direction="row" mb="2.5" mt="1.5" space={10}
            
            
            _text={{
              color: "coolGray.800",
            }}
          >
            <Center size="16"  bg="primary.100">
            <Badge colorScheme="success">SUCCESS</Badge>
            </Center >

            <Center size="16" bg="primary.200">
            <Badge colorScheme="danger">DANGER</Badge>
            </Center>
            </Stack>
            <Center w="200" h="50" bg="primary.200">
            <Text fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
              .jpg, .gif, or .png. Max file size 700K.
              </Text>
            </Center>
      </Box>    
            </Flex>  
            </Center>
            <Divider my="2" />
            <Center>
            <Heading
                color="black" marginTop="2" marginBottom="5"
                fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
                Lenguaje
              </Heading>  
              <Text fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
              Display Language
              </Text>
              <Select
          minWidth={300}
          marginTop="5"
          marginBottom="5"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          </Select>
          <Text fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
              Display Money
              </Text>
              <Select 
          minWidth={300}
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
         marginTop="5"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          </Select>
            </Center>
            <Divider my="2" />
            <Heading
                color="black" marginTop="2" marginBottom="5"
                fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
             
              </Heading> 
              <Stack
          mb="2.5"
          mt="1.5"
          direction="row"
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button
            size={{base: 'md', md: 'lg', lg: 'xl'}} //  onPress={() => console.log('hello world')}
          >
            Guardar Cambios
          </Button>
          <Button
            size={{base: 'md', md: 'lg', lg: 'xl'}} //  onPress={() => console.log('hello world')}
          >
            Cancelar
          </Button>
          </Stack>
          <Divider my="2" />
            <Heading
                color="black" marginTop="2"
                fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>
             
              </Heading> 
          </VStack>

        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}
