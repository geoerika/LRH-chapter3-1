import React, { useState } from 'react'

export default function Register ({ dispatch }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleUsername = (evt) => {
    setUsername(evt.target.value)
  }

  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const handlePasswordRepeat = (evt) => {
    setPasswordRepeat(evt.target.value)
  }
  return (
    <form onSubmit={ e => {
      e.preventDefault()
      dispatch({ type: 'REGISTER', username })
    }}>
      <div>
        <label htmlFor='register-username'>Username:</label>
        <input type='text' value={ username } onChange={ handleUsername } name='register-username' id='register-username' />
      </div>
      <div>
        <label htmlFor='register-password'>Password:</label>
        <input type='password' value={ password } onChange={ handlePassword } name='register-password' id='register-password' />
      </div>
      <div>
        <label htmlFor="register-password-repeat">Repeat password:</label>
        <input type="password" value={ passwordRepeat } onChange={ handlePasswordRepeat } name="register-password-repeat" id="register-password-repeat" />
      </div>
      <input type='submit' value='Register' disabled={ username.length === 0 || password.length === 0 || password !== passwordRepeat }/>
    </form>
  )
}