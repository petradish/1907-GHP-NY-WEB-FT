import React from 'react'
import TableCell from './TableCell.jsx'

export default (props) => {
  return (
    <tr>
      {props.row.map((color, colIdx) => (
        <TableCell key={colIdx} rowIdx={props.rowIdx} colIdx={colIdx} color={color} />
      ))}
    </tr>
  )
}
