import React from 'react'

const SingleContact = (props) => {
  const {selectedContact} = props
  const {name, email, phone, imageUrl} = selectedContact

  return (
    <div id='single-contact'>
      <img src={imageUrl} />
      <div id='contact-info'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  )
}

export default SingleContact
