import React from 'react'

const Form = (props) => (
  <form id='todo-form' onSubmit={props.handleSubmit}>

    <label htmlFor='taskName'>
      Task Name:
      {!props.taskName && props.warningMessage && <span className='warning'>{props.warningMessage}</span>}
    </label>
    <input name='taskName' type='text' onChange={props.handleChange} value={props.taskName} />

    <label htmlFor='assignee'>
      Assign To:
      {!props.assignee && props.warningMessage && <span className='warning'>{props.warningMessage}</span>}
    </label>
    <input name='assignee' type='text' onChange={props.handleChange} value={props.assignee} />

    <button type='submit' disabled={!props.taskName || !props.assignee}>Submit</button>
    {props.errorMessage && <div className='error'>{props.errorMessage}</div>}
  </form>
)

export default Form
