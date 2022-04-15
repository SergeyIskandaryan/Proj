import React from 'react'
import { useController } from 'react-hook-form'
import './Input.css'

export default function Input({ control, name, type, placeholder,required}) {

    const { field, fieldState: { error } } = useController({
        name, 
        control
    })


    return (
        <div>
            <input className='inp' {...field} type={type} placeholder={placeholder} required={required} />     
        </div>
    )
}