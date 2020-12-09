import { useState } from 'react'

export default function EditTodo({id, todo, editTodo, editToggle}){
  const [modifiedTodo, setModifiedTodo] = useState(todo)
  function handleChange(e){
    setModifiedTodo(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    editTodo(id, modifiedTodo)
    setModifiedTodo('')
    editToggle()
  }
  return(
    <form onSubmit={handleSubmit}>
    <input
      type='text'
      placeholder={todo}
      value={modifiedTodo}
      onChange={handleChange}
    /><button>Submit Change</button>
    </form>
  )
}