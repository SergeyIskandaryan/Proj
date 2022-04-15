import React, { useState } from "react";
import './Corona.css'


export default function Corona(){
    const [name,setName] = useState("")
   let b = ""

    const hendlSend = async() =>{
        try{
            const response = await fetch(`https://corona-api.com/countries/${name}`)
            const x = await response.json()
            if(x.data.length === 0){
                throw new Error('error')
            }else{
                b = x.data.names
                console.log(x);
            }    
        }
        catch(error){
            
            console.log(error);
        }
    }

    const m = (e)=>{
        const{value} = e.target
        setName(value)
    }
    return(
        <div className="MainCorona">
            <input onChange={m}/>
            <button onClick={hendlSend}>Click</button>
            {/* <p>{x.data.name}</p> */}
            
        </div>
    )
}