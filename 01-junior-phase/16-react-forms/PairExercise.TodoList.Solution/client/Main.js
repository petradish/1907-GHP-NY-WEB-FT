import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Todos from './Todos'
import SingleTodo from './SingleTodo'

export default class Main extends Component {
  render () {
    return (
      <div id='main'>
        <h1>Todos</h1>
        <Route exact path='/' component={Todos} />
        <Route path='/todos/:todoId' component={SingleTodo} />
      </div>
    )
  }
}
