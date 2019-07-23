import React from 'react'
import {Link} from 'react-router-dom'

const Todo = (props) => {
  const todo = props.todo
  const removeTodo = props.removeTodo

  return (
    <div className='todo row' key={todo.id}>
      <div className='column'>
        <Link to={`/todos/${todo.id}`}>
          <h3>{todo.taskName}</h3>
        </Link>
        <p>Assigned to: {todo.assignee}</p>
      </div>
      <div className='column'>
        {
          props.removeTodo && <button className='remove' onClick={() => removeTodo(todo.id)}>Remove</button>
        }
      </div>
    </div>
  )
}

export default Todo
