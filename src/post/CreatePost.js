import React, { useState } from 'react'

export default function CreatePost ({ user, dispatch }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitle = (evt) => {
    setTitle(evt.target.value)
  }

  const handleContent = (evt) => {
    setContent(evt.target.value)
  }

  const handleCreate = () => {
    // const newPost = {
    //   title,
    //   content,
    //   author: user
    // }
    dispatch({ type: 'CREATE_POST', title, content, author: user })
  }

  return (
    <form onSubmit={ e => {
      e.preventDefault()
      handleCreate()
    }} >
      <div>Author: <b>{ user }</b></div>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' value={ title  } onChange={ handleTitle } name='create-title' id='create-title' />
      </div>
      <div>
        <textarea value={ content } onChange={ handleContent }/>
      </div>
      <input type='submit' value='Create' />
    </form>
  )
}