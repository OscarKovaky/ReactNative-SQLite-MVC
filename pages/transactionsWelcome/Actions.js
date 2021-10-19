import SQLite from "react-native-sqlite-storage"


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
const CREAR_USER = "INSERT INTO user (name,lastName) VALUES (Oscar,Ramirez)";

const CREAR_BILLETERA = "INSERT INTO bank (name,balance,dateCreation,dateInit) VALUES(?,?,?,?)";
const DELETE_BILLETERA = "DELETE FROM bank WHERE bankId = (value)";
const ABONAR_BILLETERA = "INSERT INTO bank (balance) VALUES(34) WHERE bankId =  ";
const UPDATE_BILLETERA = "UPDATE bank SET name = (), balance = ()  ";
const OBTEN_BILLETERAS = "SELECT * FROM bank ORDER BY dateCreation";
const BUSCAR_BILLETERA = "SELECT bank FROM name";




const getUser = ()=> {
    const message  = {
        result : [],
        des : ""
    }
       
    return  new Promise ((resolve,reject) =>{
    
    db.transaction(function(txn){

      txn.executeSql(CONSULTA_DB,[],(txn,res)=>{
           
            console.log(res.rows);
            
            if(res.rowsAffected > 0){

                for (let i = 0; i < res.rows.length; ++i){
                    let item = res.rows.item(i);
                    let user = new user(item.name)
                    message.result.push(user);
                }
                message.des = "Se cargaron los datos con exito"
                resolve({result: message.result,message:message.des})
            }
               
            
        }, error => {
            message.result = [];
            message.des = `${error}`
            resolve({result: message.result,message:message.des})
        })      
})

  
})

}





const CreateBank = (userNameWallet,monto,fecha,fechaObjetivo) => {
    return new Promise ((resolve,reject) =>{
        const message  = {
            result : false,
            des: ""
        }
      
        db.transaction(function(txn){
            
            txn.executeSql(CREAR_BILLETERA,[userNameWallet,monto,fecha,fechaObjetivo],(txn,res)=>{
              
                if(res.rowsAffected > 0){
                    message.result = true,
                    message.des = "Se creo la billetera"
                }else {
                    message.result = false,
                    message.des = "Ocurrio un error"
                }
                console.log(message.des)
                resolve({result: message.result,message:message.des})
            },(error)=> {
                message.result = false,
                message.des = `${error}`
                resolve({result: message.result,message:message.des})
            })
            
        })
    })
       

}



const DeleteBank = () => {

}

const UpdateCheck = () => {

}

const WalletsList = ()=> {
    var message = {
        result: true,
        des: ""
    }
    var list = [];
    db.transaction((txn)=>{
      
        txn.executeSql(OBTEN_BILLETERAS,[],(txn,res)=>{
                   
            for (let i = 0; i < res.rows.length; ++i){
             
                list.push(res.rows.item(i))  
                 
            }
                
          
            console.log(" la longitud de la lista es:"+list.length)
          
        },(error)=> {
            message.result = false,
            message.des = `${error}`
        })
    })
    return list;
}





export  {CreateBank,getUser,WalletsList};



