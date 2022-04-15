import React, { useRef, useState } from 'react'
import './HomePage.css'
import background from ".././images/background.jpg"

export default function Info(){

    const inputval = useRef("")
    const [value,setValue] = useState("")


    return(
        <div className='Homesearch' >
        <h1 className='Homeh1'>Google</h1>
        <form  onSubmit={()=>alert(inputval.current.value)}>
        <input type="text" ref={inputval} className={true && "Homeinput"} placeholder='       Search...' onChange={(e)=>setValue((x)=>e.target.value)}/>
        </form>
        <div onClick={()=>setValue((clear)=>"")}>{value}</div>
        </div>
    )


}