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
  ScrollView

} from 'native-base';
import  {CreateBank}  from "../transactionsWelcome/Actions"
import DatePicker from 'react-native-date-picker'



const WalletCreate = () => {
 
  const [userNameWallet, setUserWallet] = useState('');
  const [error,setError] = useState({})

  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState(new Date());
  
  const [active, setActive] = useState(false);
  const[enviado,SetEnviado] = useState(false);

  const [date, setDate] = useState(new Date())
  const [dateText,SetDateText]= useState("Desea establecer una fecha objetivo? (opcional)")
 

  const Validar = ()=> {
    
      if (userNameWallet === undefined) {
        setError({
          ...error,
          name: 'Name is required',
        });
        return false;
      } else if (userNameWallet.length <= 3) {
        setError({
          ...error,
          name: 'Name is too short',
        });
        return false;
      }
      return true;
  }

  const Enviar = () => {
    const result =  Validar() ? true : false;
   
 
    if(result === true){
      CreateBank(userNameWallet, monto, fecha, date).catch(errr => {
        console.log(errr);
      });
      ClearInput();
    
    }  
  };

  const ClearInput = () => {
    setMonto('');
    setUserWallet('');
  };


  const FechaObjetivo = () => {
    setActive(true); 
    SetDateText("Estableciendo una fecha objetivo:");
  };

  const Confirmar = () => {
    
  };

  const FechaObjetivoCancel = () => {
  
    setActive(false); 
    SetDateText("Desea establecer una fecha objetivo? (opcional)");
  };

  const statusArray = [{status:"success",title:"Cartera creada!"},{status:"error",title:"el nombre de la cartera es requerido!"}]

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
            value={userNameWallet}
            onChangeText={userNameWallet => setUserWallet(userNameWallet)}
            type="text"
            placeholder="Nombre de la cartera"
          />
          {'name' in error ?
        <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Error:</FormControl.ErrorMessage>
        :
        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          El nombre debe contener al menos 4 caracteres
        </FormControl.HelperText>
        }
        </FormControl>
          <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
            { active === true ?   dateText + "   " + date.toLocaleDateString("es-mx") : dateText }
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
            { active === true ? <DatePicker locale="es-mx" androidVariant = 'nativeAndroid' date={date} onDateChange={setDate} />:console.log("Falso")}
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
          </FormControl>
         
        <FormControl mb={5}>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
            Monto Inicial (opcional) 
          </FormControl.Label>
          <Input
            type="text"
            name="monto"
            value={monto}
            placeholder="$"
            onChangeText={monto => setMonto(monto)}
          />
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
            establecer una meta $  (opcional)
          </FormControl.Label>
          <Input
            type="text"
            name="monto"
            value={monto}
            placeholder="$"
            onChangeText={monto => setMonto(monto)}
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