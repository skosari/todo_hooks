import { useState, useEffect } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'

export default function TodoApp(){
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  
  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos),[todos])
  })
  
  const addTodo = newTodo => {
    setTodos(
      [...todos, 
        {
          id: uuidv4(), 
          todo: newTodo, 
          completed: false
        }
      ])
  }
  
  const removeTodo = iD => {
    const updatedTodos = todos.filter(todo => todo.id !== iD)
    setTodos(updatedTodos)
  }

  const checkTodo = iD => {
    const updatedTodos = todos.map(todo =>
      todo.id === iD ? {...todo, completed: !todo.completed} : todo 
    )
    setTodos(updatedTodos)
  }
  const editTodo = (iD, editedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === iD ? {...todo, todo: editedTodo} : todo
      )
    setTodos(updatedTodos)
  }
  return(
    <div>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} editTodo={editTodo}/>
    </div>
  )

}