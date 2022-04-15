import './ToDo.css'


function ToDo({todo,toggleTask,removeTask}){

    return(
        <div key={todo.id} className="item-todo">
            <div  onClick={()=>toggleTask(todo.id)}>
                {todo.task}
            </div>
            <button className="item-delete" onClick={()=>removeTask(todo.id)}>Delete</button>
        </div>
    )
}

export default ToDo