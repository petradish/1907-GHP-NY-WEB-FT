import React from 'react'
import store, { colorize } from '../store'


export default class TableCell extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    store.dispatch(colorize(this.props.rowIdx, this.props.colIdx))
  }

  render() {
    return <td onClick={this.handleClick} className={this.props.color}></td>
  }
}
