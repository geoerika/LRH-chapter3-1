import React from 'react'

export default function Register () {
  return (
    <form onSubmit={ e => e.preventDefault() }>
      <div>
        <label htmlFor='register-username'>Usrname:</label>
        <input type='text' name='register-username' id='register-username' />
      </div>
      <div>
        <label htmlFor='register-password'>Password:</label>
        <input type='password' name='register-password' id='register-password' />
      </div>
      <div>
        <label htmlFor="register-password-repeat">Repeat password:</label>
        <input type="password" name="register-password-repeat" id="register-password-repeat" />
      </div>
      <input type='submit' value='Register' />
    </form>
  )
}