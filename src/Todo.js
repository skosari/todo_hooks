import { useState } from 'react'
import EditTodo from './EditTodo'

export default function Todo({id, todo, completed, removeTodo, checkTodo, editTodo}){
  
  const [editor, setEditor] = useState(false)
  const editToggle=()=>{setEditor(!editor)}

  return(
    <li 
    key={id} 
    style={completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
    {editor ? 
      <EditTodo
        id={id} 
        todo={todo}
        editTodo={editTodo}
        editToggle={editToggle}
      /> 
      :  
      <>
        {todo}
        <input 
          type='checkbox' 
          value={completed} 
          onClick={()=> checkTodo(id)}/>
        <button type='delete' onClick={() => removeTodo(id)}>Delete</button>
        <button type='edit' onClick={editToggle}>Edit</button>
      </>
    }
    </li>
  )
}