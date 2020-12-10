
import Todo from './Todo'

export default function TodoList({todos, removeTodo, checkTodo, editTodo}){
  if(todos.length)
  return(
    <ul>
      {todos.map(x=>
        <Todo
          key={x.id}
          id={x.id}
          todo={x.todo}
          completed={x.completed}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
          editTodo={editTodo}
        />
      )}
    </ul>
  ) 
  return null
} 