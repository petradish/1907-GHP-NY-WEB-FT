import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div id='navbar' className='row'>
      <Link to='/stories'>Stories</Link>
      <Link to='/authors'>Authors</Link>
    </div>
  )
}

export default Navbar
