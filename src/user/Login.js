import React, { useState } from 'react'

export default function Login({ dispatch }) {
  const [username, setUsername] = useState('')
  const handleUsername = (evt) => {
    setUsername(evt.target.value)
  }
  return (
    <form onSubmit={ e => { 
      e.preventDefault()
      dispatch({ type: 'LOGIN', username })
    }}>
      <div>
        <label htmlFor='login-username'>Username:</label>
        <input type='text' value={ username } onChange={ handleUsername } name='login-username' id='login-username' />
      </div>
      <div>
        <label htmlFor='login-password'>Password:</label>
        <input type='password' name='login-password' id='login-password' />
      </div>
      <input type='submit' value='Login' disabled={username.length === 0 } />
    </form>
  )
}