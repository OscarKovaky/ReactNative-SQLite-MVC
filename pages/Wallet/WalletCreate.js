import React, { useEffect, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  ScrollView,
  PresenceTransition

} from 'native-base';
import  {CreateBank}  from "../transactionsWelcome/Actions"
import DatePicker from 'react-native-date-picker'



const WalletCreate = () => {
  const [error,setError] = useState({})
  const [active, setActive] = useState(false);
  

  const[enviado,SetEnviado] = useState(false);

  const [fechaObjetivo, setDate] = useState(new Date())

  const [user,SetUserData] = useState({
    userNameWallet:"",
    monto:"",
    fecha: new Date().getTime(),
    fechaObjetivo: fechaObjetivo.toDateString()
  })

  const [dateText,SetDateText]= useState("Desea establecer una fecha objetivo? (opcional)")
 

  const Validar = ()=> {
    
      if (user.userNameWallet === "") {
        setError({
          ...error,
          name: 'Name is required',
        });
        return false;
      } 
      return true;
      }    
  

  const Enviar = () => {
    const result =  Validar() ? true : false;
   
 
    if(result === true){
     const data = ()=> CreateBank({...user});
      data()
      console.log(data)
      if(data === "Se creo la billetera"){

        ClearInput();
      }else{

      }
      
    
    }  
  };

  const ClearInput = () => {
    SetUserData({})
  };


  const FechaObjetivo = () => {
    setActive(true); 
    SetDateText("Estableciendo una fecha objetivo:");
  };

  const Confirmar = () => {
    setDate(fechaObjetivo)
  };

  const FechaObjetivoCancel = () => {
    setActive(false); 
    SetDateText("Desea establecer una fecha objetivo? (opcional)");
  };

  

  return (
   
    <Box safeArea flex={1} p={2} w="90%" mx="auto">
       <ScrollView
      _contentContainerStyle={{
        px: "20px",
        mb: "5",
        
      }}
    >
      <Heading size="lg" color="primary.500">
        Hola Oscar Bienvenido
      </Heading>
      <Heading color="muted.400" size="xs">
        Aqui podras crear tu primera cartera!
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl isRequired  isInvalid={'name' in error}>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
            Nombre de la Cartera
          </FormControl.Label>
          <Input
            name="name"
            value={user.userNameWallet}
            onChangeText={(value) => SetUserData({name: value})}
            type="text"
            placeholder="Nombre de la cartera"
          />
          {'name' in error ?
        <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Nombre es requerido:</FormControl.ErrorMessage>
        :
        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          El nombre debe contener al menos 4 caracteres
        </FormControl.HelperText>
        }
        </FormControl>
          <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
            { active === true ?   dateText + "   " + fechaObjetivo.toLocaleDateString("es-mx") : dateText }
          </FormControl.Label>       
        <Box flexDirection="row" alignSelf="center" >
            <Button 
                height={50}
                width={50}     
                borderRadius={360}       
                
              colorScheme= {active === false ?  "green"  :  "red"  }    
              _text={{color: 'white'}}        
              onPress={active === false ? FechaObjetivo: FechaObjetivoCancel}>
              {active === false ?  "+" : "-"} 
            </Button>  
            </Box> 
                <PresenceTransition
            visible={active}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 250,
              },
            }}
          > 
            { active === true ? <DatePicker locale="es-mx" androidVariant = 'nativeAndroid' date={fechaObjetivo} onDateChange={setDate} />:console.log("Falso")}
            <Box alignItems="center">
            {active === true ? <Button 
                height={50}
                width={150}     
                borderRadius={120}       
                
              colorScheme= "green"   
              _text={{color: 'white'}}        
              onPress={Confirmar}>
             Confirmar
            </Button> : "" }        
            </Box>
        </PresenceTransition>
          </FormControl>
         
        <FormControl mb={5}>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
            Monto Inicial (opcional) 
          </FormControl.Label>
          <Input
            type="text"
            name="monto"
            value={user.monto}
            placeholder="$"
            onChangeText={(value) => SetUserData({...user,monto: value})}
          />
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
            establecer una meta $  (opcional)
          </FormControl.Label>
          <Input
            type="text"
            name="monto"
            value={user.monto}
            placeholder="$"
            onChangeText={(value) => SetUserData({...user,monto: value})}
          />

          <Link
            _text={{fontSize: 'xs', fontWeight: '700', color: 'cyan.500'}}
            alignSelf="flex-end"
            mt={1}>
            que es una cartera?
          </Link>
        </FormControl>
        <VStack space={2}>
          <Button colorScheme="cyan" _text={{color: 'white'}} onPress={Enviar} >
            Crear
          </Button>

          <HStack justifyContent="center" alignItem="center"></HStack>
        </VStack>
        <HStack justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            I'm a new user.{' '}
          </Text>
          <Link
            _text={{color: 'cyan.500', bold: true, fontSize: 'sm'}}
            href="#">
            Sign Up
          </Link>
        </HStack>
      </VStack>
      </ScrollView>
    </Box>
  
  );
};

export default WalletCreate;