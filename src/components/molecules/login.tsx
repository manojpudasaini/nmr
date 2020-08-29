import React,{useEffect, useState} from 'react';
import Input from '../atoms/Input/index';
import axios from "axios"
const LoginForm=()=>{
  
    const [info,setData]=useState([]);
    useEffect(()=>{
        console.log('info')
        const res =axios.get("https://virtserver.swaggerhub.com/WesionaryTEAM5/LocatorAPI/1.0.0/places")
       .then((res :any)=>{
        let placeArray :any=[];
           res.data.forEach((element :any) => {
               placeArray.push(element)
              
           });
           setData(placeArray)
       })
       
    },[])
    console.log(info)
    return(
        <form>
         {

           info.map((ele :any)=>
                  <div>
              <p>{ele.name}</p>
              <br/>
              <p>{ele.id}</p>
              </div>

              

           )
         }


            <Input value="Jhon" type="text" onChange={(e)=>{}} placeholder="username" />
            <Input value="Jhon" type="password" onChange={(e)=>{}} placeholder="username" />

        </form>
    )
};
export default LoginForm;