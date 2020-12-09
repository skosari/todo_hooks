import React, { useState } from 'react'

export default function AddTodo({addTodo}){
  const [todo, setTodo] = useState('')
  function handleChange(e){
    setTodo(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    addTodo(todo)
    setTodo('')
  }
  return( 
      <form onSubmit={handleSubmit}>
        <label htmlFor='addTodo'>Add Todo</label>
        <input
          id='addTodo'
          name='addTodo'
          value={todo}
          onChange={handleChange}
        />
      </form>
    
  )
}