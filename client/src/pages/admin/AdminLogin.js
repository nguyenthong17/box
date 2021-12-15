import React,{useState, useContext} from 'react'
import { AuthContext } from '../../context/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function AdminLogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  
  const navigate = useNavigate()
  const {isLoggedIn,loginUser, setErrMessage} = useContext(AuthContext)

  const handleUsername = e => setUsername(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const requestBody = {username, password}
    axios.post('/login/admin', requestBody)
        .then (res => {
          const token = res.data.authToken

          loginUser(token)
          navigate('/admin')
        })
        .catch(err => {
          setErrMessage(err.response.data.message)
        })
  }
  
  return (
    <div className='admin-login'>
      <form onSubmit={handleSubmit}>
        <label >
          Username
          <input type="text" value={username} placeholder='Username' onChange={handleUsername}/>
        </label>
        <label>
          Password
          <input type="password" value={password} placeholder='Password' onChange={handlePassword}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
