import React, {Component} from 'react'
import Todo from './Todo'
import UpdateTodo from './UpdateTodo'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleTodo extends Component {
  constructor () {
    super()
    this.state = {
      todo: {}
    }
    this.updateTodo = this.updateTodo.bind(this)
  }

  async componentDidMount () {
    const todoId = this.props.match.params.todoId
    const res = await axios.get(`/api/todos/${todoId}`)
    this.setState({todo: res.data})
  }

  updateTodo (todo) {
    this.setState({todo})
  }

  render () {
    const todo = this.state.todo

    return (
      <div id='single-todo'>
        <Todo todo={todo} />
        {
          // Our "update" component wants to set the default value of the form
          // to be the data we have in our todo. However, we need to asynchronously
          // fetch the todo from the server first! So...let's just wait until we have
          // if (somethingTruthy || somethingFalsey)
          // it to render the component!
          this.state.todo.id &&
            <UpdateTodo todo={todo} updateTodo={this.updateTodo} />
        }
        <Link to='/'>Back</Link>
      </div>
    )
  }
}
