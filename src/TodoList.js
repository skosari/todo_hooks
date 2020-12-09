
import Todo from './Todo'

export default function TodoList({todos, removeTodo, checkTodo, editTodo}){
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
} 