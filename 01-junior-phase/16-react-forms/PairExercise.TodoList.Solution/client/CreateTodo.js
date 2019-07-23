import React, {Component} from 'react'
import axios from 'axios'
import Form from './Form'

const defaultState = {
  taskName: '',
  assignee: '',
  errorMessage: ''
}

export default class CreateTodo extends Component {
  constructor () {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit (evt) {
    evt.preventDefault()
    try {
      const res = await axios.post('/api/todos', this.state)
      this.props.addTodo(res.data)
      this.setState(defaultState)
    } catch (err) {
      this.setState({
        errorMessage: `There was a problem creating the todo: ${err.message}`
      })
    }
  }

  render () {
    return (
      <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    )
  }
}
