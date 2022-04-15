import { useState } from "react";
import './ToDoForm.css'
import { useForm } from "react-hook-form";

export default function ToDoForm({addTask}){
    const[userInput,setUserInput] = useState("")
    const{ formState: { errors }} = useForm()

    const handleChang = (e)=>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e)=>{
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }
    return(
        <form onSubmit={handleSubmit}>
<input value={userInput}
name="ToDoForm1"
type="text"
onChange={handleChang}
onKeyDown={handleKeyPress}
placeholder="Grel nshanakutyun@..."
className="ToDoFormInput"
required={true}

/>
<button className="ToDoFormBtn">Click me</button>
{errors.ToDoForm1 && <div>Sxale</div>}
        </form>
    )
}