import React from "react";
import './Registr.css'
import { useForm } from 'react-hook-form'
import Input from "../../Components/Input/Input";

export default function Registr () {
    const {handleSubmit,control} = useForm();
    const onSubmit = (data) =>console.log(data);
    return (
        <div className="formheader">
            <form onSubmit={handleSubmit(onSubmit)}>           
                <Input name="firstName" control={control} type="text" placeholder="First Name" />               
                <Input name="lastName"  control={control} type="text" placeholder="Last Name" />                             
                <Input  name="email" control={control} type="email" placeholder="Email"/>               
                <Input name="password" control={control} type="password" placeholder="Password"/>
                <input type="submit" value="Submit" className="subButton" />
              
                
            </form>
        </div>
    )
}