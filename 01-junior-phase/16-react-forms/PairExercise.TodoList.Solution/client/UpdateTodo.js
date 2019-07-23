import React, {Component} from 'react'
import axios from 'axios'
import Form from './Form'

export default class UpdateTodo extends Component {
  constructor () {
    super()
    this.state = {
      taskName: '',
      assignee: '',
      warningMessage: '',
      initialized: false,
      errorMessage: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({
      taskName: this.props.todo.taskName,
      assignee: this.props.todo.assignee,
      warningMessage: 'Field is required!'
      // note: it's preferable to only set the warning message here rather than hard-code it
      // as a prop so that we avoid "flashing" it when the component initially renders
    })
  }

  // componentDidUpdate (prevProps, prevState) {
  //   console.log('componentDidUpdate running...')
  //   if (prevProps.todo !== this.props.todo) {
  //     this.setState({
  //       taskName: this.props.todo.taskName,
  //       assignee: this.props.todo.assignee
  //     })
  //   }
  // }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit (evt) {
    evt.preventDefault()
    const todoId = this.props.todo.id
    try {
      const res = await axios.put(`/api/todos/${todoId}`, this.state)
      this.props.updateTodo(res.data)
    } catch (err) {
      this.setState({
        errorMessage: `There was a problem updating the todo: ${err.message}`
      })
    }
  }

  render () {
    return (
      <Form
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
