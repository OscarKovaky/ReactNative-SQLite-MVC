import SQLite from "react-native-sqlite-storage"
import React,{useState,useEffect} from "react"

SQLite.DEBUG(true);
SQLite.enablePromise(false);

var db  = SQLite.openDatabase({name:"localBank",location:"default" ,createFromLocation:'~www/localBank.db' }
,
  () => { },
  error => {
    console.log("ERROR: " + error);
  }
)
 




const CONSULTA_USER  = "SELECT name FROM user  ";
const CREAR_USER = "INSERT INTO user (name,lastName) VALUES (?,?)";

const CREAR_BILLETERA = "INSERT INTO bank (name,balance,dateCreation,dateInit) VALUES(?,?,?,?)";
const DELETE_BILLETERA = "DELETE FROM bank WHERE bankId = (value)";
const ABONAR_BILLETERA = "INSERT INTO bank (balance) VALUES(?) WHERE bankId =  ";
const UPDATE_BILLETERA = "UPDATE bank SET name = (), balance = ()  ";
const OBTEN_BILLETERAS = "SELECT * FROM bank ORDER BY dateCreation";
const BUSCAR_BILLETERA = "SELECT bank FROM name";




const  getUser = async ()=> {
    const user  = {
        result : [],
        des : ""
    }
       
   await db.transaction(function(txn){

      txn.executeSql(CONSULTA_USER,[],(txn,res)=>{
                                
                for (let i = 0; i < res.rows.length; ++i){
                
                  user.result.push(res.rows.item(i)) 
                }
                user.des = "Se cargaron los datos con exito"
                                                
        }, error => {        
            user.des = `${error}`
           
        })      
    })


 return user;

}

const AbonarBilletera = () =>{

}

const CreateUser = (name,lastName)=> {
    const message  = {
        result : false,
        des: ""
    }
  
    db.transaction(function(txn){
        
        txn.executeSql(CREAR_USER,[name,lastName],(txn,res)=>{
          
            if(res.rowsAffected > 0){
                message.result = true,
                message.des = "Bienvenido!"
            }else {
                message.result = false,
                message.des = "Ocurrio un error"
            }
            console.log(message.des)
         
        },(error)=> {
            message.result = false,
            message.des = `${error}`
     
        })
        
    })

   return message;
}


const CreateBank = (UserData) => {
        const {userNameWallet,monto,fechaObjetivo} = UserData
        const message  = {
            result : false,
            des: ""
        }
        console.log(UserData)
        db.transaction(function(txn){
            
            txn.executeSql(CREAR_BILLETERA,[userNameWallet,monto,new Date().getUTCDate(),fechaObjetivo],(txn,res)=>{
              console.log(res.rowsAffected)
                if(res.rowsAffected > 0){
                    message.result = true,
                    message.des = "Se creo la billetera"
                }else {
                    message.result = false,
                    message.des = "Ocurrio un error"
                }
                console.log(message.des)
             
            },(error)=> {
                message.result = false,
                message.des = `${error}`
         
            })
            
        })
       
       return message.des;
}



const DeleteBank = (id) => {
    const message  = {
        result : false,
        des: ""
    }
  
    db.transaction(function(txn){
        
        txn.executeSql(DELETE_BILLETERA,[id],(txn,res)=>{
          
            if(res.rowsAffected > 0){
                message.result = true,
                message.des = "Se boro la billetera"
            }else {
                message.result = false,
                message.des = "Ocurrio un error"
            }
            console.log(message.des)
         
        },(error)=> {
            message.result = false,
            message.des = `${error}`
     
        })
        
    })

   return message;
}

const UpdateCheck = () => {

}

const WalletsList =  ()=> {
    const [list, setList] = useState([]);
    useEffect(() => {
    
        db.transaction((txn)=>{
      
            txn.executeSql(OBTEN_BILLETERAS,[],(txn,res)=>{
             
                let walletList = []; 
                for (let i = 0; i < res.rows.length; i++){                        
                   walletList.push(res.rows.item(i))
                   setList(walletList)
                   
                }
                    
                      
            },(error)=> {
             
            })
        })
    
  
   
 
    }, []);
  
  
   return list;
}





export  {CreateBank,getUser,WalletsList};



