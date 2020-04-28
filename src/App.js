import React, { useReducer } from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const defaultPosts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username
    case 'LOGOUT':
      return ''
    default:
      throw new Error()
  }
}

const postReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = { title: action.title, content: action.content, author: action.author }
      return [ newPost, ...state ]
    default:
      throw new Error()
  }
}

export default function App () {
  // const [user, setUser] = useState('')
  // const [posts, setPosts] = useState(defaultPosts)

  const [user, dispatchUser] = useReducer(userReducer, '')
  const [posts, dispatchPosts] = useReducer(postReducer, defaultPosts)
  return (
    <div style={{ padding: 8 }}>
      <UserBar user={ user } dispatch={ dispatchUser }/>
        <br />
        { user && <CreatePost user={ user } dispatch={ dispatchPosts }/> }
        <br />
        <hr />
        <PostList posts={ posts } />
    </div>
  )
}